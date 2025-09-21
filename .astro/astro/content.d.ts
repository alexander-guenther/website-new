declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"repertoire": {
"Konzert.md": {
	id: "Konzert.md";
  slug: "konzert";
  body: string;
  collection: "repertoire";
  data: any
} & { render(): Render[".md"] };
"Liederzyklen.md": {
	id: "Liederzyklen.md";
  slug: "liederzyklen";
  body: string;
  collection: "repertoire";
  data: any
} & { render(): Render[".md"] };
"Oper.md": {
	id: "Oper.md";
  slug: "oper";
  body: string;
  collection: "repertoire";
  data: any
} & { render(): Render[".md"] };
"Operette-Musical-Schauspiel.md": {
	id: "Operette-Musical-Schauspiel.md";
  slug: "operette-musical-schauspiel";
  body: string;
  collection: "repertoire";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"fotos": {
"foto1": {
	id: "foto1";
  collection: "fotos";
  data: any
};
"foto2": {
	id: "foto2";
  collection: "fotos";
  data: any
};
"foto3": {
	id: "foto3";
  collection: "fotos";
  data: any
};
"map-img-src-assets-8019-096-webp-publishdate-2024-09-09t03-29-00-000z-img_alt-mit-krone": {
	id: "map-img-src-assets-8019-096-webp-publishdate-2024-09-09t03-29-00-000z-img_alt-mit-krone";
  collection: "fotos";
  data: any
};
"map-img-src-assets-_35a0050-webp-img_alt-am-boden-publishdate-2024-09-09t03-29-00-000z": {
	id: "map-img-src-assets-_35a0050-webp-img_alt-am-boden-publishdate-2024-09-09t03-29-00-000z";
  collection: "fotos";
  data: any
};
"map-publishdate-2024-09-09t03-25-00-000z-img-src-assets-img_1606-webp-img_alt-pinker-hintergrund": {
	id: "map-publishdate-2024-09-09t03-25-00-000z-img-src-assets-img_1606-webp-img_alt-pinker-hintergrund";
  collection: "fotos";
  data: any
};
"map-publishdate-2024-09-09t03-26-00-000z-img-src-assets-can_20220504_110-webp-img_alt-blonde-perücke-weisser-anzug": {
	id: "map-publishdate-2024-09-09t03-26-00-000z-img-src-assets-can_20220504_110-webp-img_alt-blonde-perücke-weisser-anzug";
  collection: "fotos";
  data: any
};
"map-publishdate-2024-09-09t03-26-00-000z-img-src-assets-can_20220831_133-webp-img_alt-vögelköpfe": {
	id: "map-publishdate-2024-09-09t03-26-00-000z-img-src-assets-can_20220831_133-webp-img_alt-vögelköpfe";
  collection: "fotos";
  data: any
};
"map-publishdate-2024-09-09t03-26-00-000z-img-src-assets-can_20230712_065-webp-img_alt-weisser-anzug-vor-gruppe": {
	id: "map-publishdate-2024-09-09t03-26-00-000z-img-src-assets-can_20230712_065-webp-img_alt-weisser-anzug-vor-gruppe";
  collection: "fotos";
  data: any
};
"map-publishdate-2024-09-09t03-27-00-000z-img-src-assets-can20230118_128-webp-img_alt-dunkler-hintergrund": {
	id: "map-publishdate-2024-09-09t03-27-00-000z-img-src-assets-can20230118_128-webp-img_alt-dunkler-hintergrund";
  collection: "fotos";
  data: any
};
"map-publishdate-2024-09-09t03-27-00-000z-img-src-assets-can_20190906_132-webp-img_alt-pudel": {
	id: "map-publishdate-2024-09-09t03-27-00-000z-img-src-assets-can_20190906_132-webp-img_alt-pudel";
  collection: "fotos";
  data: any
};
"map-publishdate-2024-09-09t03-28-00-000z-img-src-assets-_dsc9637_dxo-webp-img_alt-einstein": {
	id: "map-publishdate-2024-09-09t03-28-00-000z-img-src-assets-_dsc9637_dxo-webp-img_alt-einstein";
  collection: "fotos";
  data: any
};
"map-publishdate-2024-09-09t03-28-00-000z-img-src-assets-ar9a9530-webp-img_alt-bemaltes-gesicht-dunkel": {
	id: "map-publishdate-2024-09-09t03-28-00-000z-img-src-assets-ar9a9530-webp-img_alt-bemaltes-gesicht-dunkel";
  collection: "fotos";
  data: any
};
"map-publishdate-2024-09-09t03-28-00-000z-img-src-assets-can20230112_009-webp-img_alt-mit-rucksack": {
	id: "map-publishdate-2024-09-09t03-28-00-000z-img-src-assets-can20230112_009-webp-img_alt-mit-rucksack";
  collection: "fotos";
  data: any
};
"map-vorstellung-carmen-in-einem-akt-rolle-escamillo-fotograf-thomas-müller-publishdate-2024-10-01t17-08-00-000z-img-assets-tmue20120127a61-jpg": {
	id: "map-vorstellung-carmen-in-einem-akt-rolle-escamillo-fotograf-thomas-müller-publishdate-2024-10-01t17-08-00-000z-img-assets-tmue20120127a61-jpg";
  collection: "fotos";
  data: any
};
"map-vorstellung-der-freischütz-rolle-max-fotograf-christian-wiehle-publishdate-2024-10-01t17-21-00-000z-img-assets-wiehle_freischütz_18-jpg": {
	id: "map-vorstellung-der-freischütz-rolle-max-fotograf-christian-wiehle-publishdate-2024-10-01t17-21-00-000z-img-assets-wiehle_freischütz_18-jpg";
  collection: "fotos";
  data: any
};
"map-vorstellung-der-opernball-rolle-paul-aubier-fotograf-thomas-müller-publishdate-2024-10-01t17-06-00-000z-img-assets-tme_4053-jpg": {
	id: "map-vorstellung-der-opernball-rolle-paul-aubier-fotograf-thomas-müller-publishdate-2024-10-01t17-06-00-000z-img-assets-tme_4053-jpg";
  collection: "fotos";
  data: any
};
"map-vorstellung-die-fledermaus-rolle-herr-von-eisenstein-fotograf-vincent-leifer-publishdate-2024-10-01t17-22-00-000z-img-assets-w21a9871-jpg": {
	id: "map-vorstellung-die-fledermaus-rolle-herr-von-eisenstein-fotograf-vincent-leifer-publishdate-2024-10-01t17-22-00-000z-img-assets-w21a9871-jpg";
  collection: "fotos";
  data: any
};
"map-vorstellung-herr-von-eisenstein-gibt-alles-soloprogramm-rolle-alle-fotograf-candy-welz-publishdate-2024-10-01t17-24-00-000z-img-assets-can_20211013-037-jpg": {
	id: "map-vorstellung-herr-von-eisenstein-gibt-alles-soloprogramm-rolle-alle-fotograf-candy-welz-publishdate-2024-10-01t17-24-00-000z-img-assets-can_20211013-037-jpg";
  collection: "fotos";
  data: any
};
"map-vorstellung-hänsel-und-gretel-rolle-knusperhexe-fotograf-erhard-driesel-publishdate-2024-10-01t17-11-00-000z-img-assets-gvk6assjctfghff7yrxniczmi0bplzlkii9sestjbpk-1-jpeg": {
	id: "map-vorstellung-hänsel-und-gretel-rolle-knusperhexe-fotograf-erhard-driesel-publishdate-2024-10-01t17-11-00-000z-img-assets-gvk6assjctfghff7yrxniczmi0bplzlkii9sestjbpk-1-jpeg";
  collection: "fotos";
  data: any
};
"map-vorstellung-lola-rennt-rolle-ronni-fotograf-jörg-landsberg-publishdate-2024-10-01t17-19-00-000z-img-assets-img_8438-kopie-jpg": {
	id: "map-vorstellung-lola-rennt-rolle-ronni-fotograf-jörg-landsberg-publishdate-2024-10-01t17-19-00-000z-img-assets-img_8438-kopie-jpg";
  collection: "fotos";
  data: any
};
"map-vorstellung-lulu-rolle-neger-fotograf-vincent-stefan-publishdate-2024-10-01t17-04-00-000z-img-assets-lulu-gp-vincent-stefan-6949-jpg": {
	id: "map-vorstellung-lulu-rolle-neger-fotograf-vincent-stefan-publishdate-2024-10-01t17-04-00-000z-img-assets-lulu-gp-vincent-stefan-6949-jpg";
  collection: "fotos";
  data: any
};
"map-vorstellung-margarethe-faust-rolle-alter-faust-fotograf-monika-rittershaus-publishdate-2024-10-01t17-09-00-000z-img-assets-faust_004-jpg": {
	id: "map-vorstellung-margarethe-faust-rolle-alter-faust-fotograf-monika-rittershaus-publishdate-2024-10-01t17-09-00-000z-img-assets-faust_004-jpg";
  collection: "fotos";
  data: any
};
"map-vorstellung-salomé-rolle-herodes-fotograf-candy-welz-publishdate-2024-10-01t16-16-00-000z-img-assets-can_20240912_135-jpg": {
	id: "map-vorstellung-salomé-rolle-herodes-fotograf-candy-welz-publishdate-2024-10-01t16-16-00-000z-img-assets-can_20240912_135-jpg";
  collection: "fotos";
  data: any
};
"map-vorstellung-turandot-rolle-ping-fotograf-anke-neugebauer-img-assets-2637-jpg-publishdate-2024-10-01t16-37-00-000z": {
	id: "map-vorstellung-turandot-rolle-ping-fotograf-anke-neugebauer-img-assets-2637-jpg-publishdate-2024-10-01t16-37-00-000z";
  collection: "fotos";
  data: any
};
};
"termine": {
"map-datum-14-09-2024-vorstellung-salomé-rolle-als-herodes": {
	id: "map-datum-14-09-2024-vorstellung-salomé-rolle-als-herodes";
  collection: "termine";
  data: any
};
"map-datum-2024-09-28t19-00-00-000z-vorstellung-theaterfest-rolle-u-a-als-erzähler-„paddington-bärs-erstes-konzert“": {
	id: "map-datum-2024-09-28t19-00-00-000z-vorstellung-theaterfest-rolle-u-a-als-erzähler-„paddington-bärs-erstes-konzert“";
  collection: "termine";
  data: any
};
"map-datum-2024-10-04t19-00-00-000z-vorstellung-my-fair-lady-rolle-als-prof-henry-higgins": {
	id: "map-datum-2024-10-04t19-00-00-000z-vorstellung-my-fair-lady-rolle-als-prof-henry-higgins";
  collection: "termine";
  data: any
};
"map-datum-2024-10-06t19-00-00-000z-vorstellung-salomé-rolle-als-herodes": {
	id: "map-datum-2024-10-06t19-00-00-000z-vorstellung-salomé-rolle-als-herodes";
  collection: "termine";
  data: any
};
"map-datum-2024-10-11t11-54-00-000z-vorstellung-my-fair-lady-rolle-als-prof-henry-higgins": {
	id: "map-datum-2024-10-11t11-54-00-000z-vorstellung-my-fair-lady-rolle-als-prof-henry-higgins";
  collection: "termine";
  data: any
};
"map-datum-2024-10-18t19-00-00-000z-vorstellung-salomé-rolle-als-herodes": {
	id: "map-datum-2024-10-18t19-00-00-000z-vorstellung-salomé-rolle-als-herodes";
  collection: "termine";
  data: any
};
"map-datum-2024-10-26t19-00-00-000z-vorstellung-der-zauberberg-rolle-als-oberschwester-mühlendonk": {
	id: "map-datum-2024-10-26t19-00-00-000z-vorstellung-der-zauberberg-rolle-als-oberschwester-mühlendonk";
  collection: "termine";
  data: any
};
"map-datum-2024-11-09t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2024-11-09t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2024-11-10t19-00-00-000z-vorstellung-der-zauberberg-rolle-als-oberschwester-mühlendonk": {
	id: "map-datum-2024-11-10t19-00-00-000z-vorstellung-der-zauberberg-rolle-als-oberschwester-mühlendonk";
  collection: "termine";
  data: any
};
"map-datum-2024-11-12t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2024-11-12t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2024-11-15t11-54-00-000z-vorstellung-salomé-rolle-als-herodes": {
	id: "map-datum-2024-11-15t11-54-00-000z-vorstellung-salomé-rolle-als-herodes";
  collection: "termine";
  data: any
};
"map-datum-2024-11-16t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2024-11-16t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2024-11-21t19-00-00-000z-vorstellung-der-zauberberg-rolle-als-oberschwester-mühlendonk": {
	id: "map-datum-2024-11-21t19-00-00-000z-vorstellung-der-zauberberg-rolle-als-oberschwester-mühlendonk";
  collection: "termine";
  data: any
};
"map-datum-2024-11-21t19-00-00-000z-vorstellung-der-zauberberg-rolle-als-oberschwester-mühlendonk-1": {
	id: "map-datum-2024-11-21t19-00-00-000z-vorstellung-der-zauberberg-rolle-als-oberschwester-mühlendonk-1";
  collection: "termine";
  data: any
};
"map-datum-2024-11-24t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2024-11-24t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2024-11-25t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2024-11-25t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2024-12-01t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2024-12-01t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2024-12-02t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2024-12-02t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2024-12-02t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe-1": {
	id: "map-datum-2024-12-02t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe-1";
  collection: "termine";
  data: any
};
"map-datum-2024-12-06t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2024-12-06t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2024-12-08t11-54-00-000z-vorstellung-salomé-rolle-als-herodes": {
	id: "map-datum-2024-12-08t11-54-00-000z-vorstellung-salomé-rolle-als-herodes";
  collection: "termine";
  data: any
};
"map-datum-2024-12-10t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2024-12-10t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2024-12-18t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2024-12-18t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2024-12-18t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe-1": {
	id: "map-datum-2024-12-18t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe-1";
  collection: "termine";
  data: any
};
"map-datum-2024-12-23t19-00-00-000z-vorstellung-der-zauberberg-rolle-als-oberschwester-mühlendonk": {
	id: "map-datum-2024-12-23t19-00-00-000z-vorstellung-der-zauberberg-rolle-als-oberschwester-mühlendonk";
  collection: "termine";
  data: any
};
"map-datum-2024-12-26t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2024-12-26t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2024-12-28t11-54-00-000z-vorstellung-salomé-rolle-als-herodes": {
	id: "map-datum-2024-12-28t11-54-00-000z-vorstellung-salomé-rolle-als-herodes";
  collection: "termine";
  data: any
};
"map-datum-2024-12-31t19-00-00-000z-vorstellung-dinner-for-one-rolle-als-oberschwester-mühlendonk": {
	id: "map-datum-2024-12-31t19-00-00-000z-vorstellung-dinner-for-one-rolle-als-oberschwester-mühlendonk";
  collection: "termine";
  data: any
};
"map-datum-2025-01-10t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2025-01-10t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2025-01-19t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2025-01-19t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2025-01-25t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe": {
	id: "map-datum-2025-01-25t19-00-00-000z-vorstellung-hänsel-und-gretel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2025-02-02t10-00-00-000z-vorstellung-räuber-hotzenplotz-rolle-petrosilius-zwackelmann": {
	id: "map-datum-2025-02-02t10-00-00-000z-vorstellung-räuber-hotzenplotz-rolle-petrosilius-zwackelmann";
  collection: "termine";
  data: any
};
"map-datum-2025-02-23t15-03-00-000z-vorstellung-räuber-hotzenplotz-rolle-petrosilius-zwackelmann": {
	id: "map-datum-2025-02-23t15-03-00-000z-vorstellung-räuber-hotzenplotz-rolle-petrosilius-zwackelmann";
  collection: "termine";
  data: any
};
"map-datum-2025-03-01t16-00-00-000z-vorstellung-räuber-hotzenplotz-rolle-petrosilius-zwackelmann": {
	id: "map-datum-2025-03-01t16-00-00-000z-vorstellung-räuber-hotzenplotz-rolle-petrosilius-zwackelmann";
  collection: "termine";
  data: any
};
"map-datum-2025-03-04t10-00-00-000z-vorstellung-räuber-hotzenplotz-rolle-petrosilius-zwackelmann": {
	id: "map-datum-2025-03-04t10-00-00-000z-vorstellung-räuber-hotzenplotz-rolle-petrosilius-zwackelmann";
  collection: "termine";
  data: any
};
"map-datum-2025-03-14t19-00-00-000z-vorstellung-der-zauberberg-rolle-als-oberschwester-mühlendonk": {
	id: "map-datum-2025-03-14t19-00-00-000z-vorstellung-der-zauberberg-rolle-als-oberschwester-mühlendonk";
  collection: "termine";
  data: any
};
"map-datum-2025-04-05t19-00-00-000z-vorstellung-die-passagierin-rolle-als-ss-mann": {
	id: "map-datum-2025-04-05t19-00-00-000z-vorstellung-die-passagierin-rolle-als-ss-mann";
  collection: "termine";
  data: any
};
"map-datum-2025-04-11t19-00-00-000z-vorstellung-die-passagierin-rolle-als-ss-mann": {
	id: "map-datum-2025-04-11t19-00-00-000z-vorstellung-die-passagierin-rolle-als-ss-mann";
  collection: "termine";
  data: any
};
"map-datum-2025-04-16t19-00-00-000z-vorstellung-my-fair-lady-rolle-als-prof-henry-higgins": {
	id: "map-datum-2025-04-16t19-00-00-000z-vorstellung-my-fair-lady-rolle-als-prof-henry-higgins";
  collection: "termine";
  data: any
};
"map-datum-2025-04-25t19-00-00-000z-vorstellung-die-passagierin-rolle-als-ss-mann": {
	id: "map-datum-2025-04-25t19-00-00-000z-vorstellung-die-passagierin-rolle-als-ss-mann";
  collection: "termine";
  data: any
};
"map-datum-2025-05-10t19-00-00-000z-vorstellung-die-passagierin-rolle-als-ss-mann": {
	id: "map-datum-2025-05-10t19-00-00-000z-vorstellung-die-passagierin-rolle-als-ss-mann";
  collection: "termine";
  data: any
};
"map-datum-2025-05-16t19-00-00-000z-vorstellung-my-fair-lady-rolle-als-prof-henry-higgins": {
	id: "map-datum-2025-05-16t19-00-00-000z-vorstellung-my-fair-lady-rolle-als-prof-henry-higgins";
  collection: "termine";
  data: any
};
"map-datum-2025-05-23t19-00-00-000z-vorstellung-die-passagierin-rolle-als-ss-mann": {
	id: "map-datum-2025-05-23t19-00-00-000z-vorstellung-die-passagierin-rolle-als-ss-mann";
  collection: "termine";
  data: any
};
"map-datum-2025-05-29t19-00-00-000z-vorstellung-my-fair-lady-rolle-als-prof-henry-higgins": {
	id: "map-datum-2025-05-29t19-00-00-000z-vorstellung-my-fair-lady-rolle-als-prof-henry-higgins";
  collection: "termine";
  data: any
};
"map-datum-2025-06-05t19-00-00-000z-vorstellung-my-fair-lady-rolle-als-prof-henry-higgins": {
	id: "map-datum-2025-06-05t19-00-00-000z-vorstellung-my-fair-lady-rolle-als-prof-henry-higgins";
  collection: "termine";
  data: any
};
"map-datum-2025-06-09t19-00-00-000z-vorstellung-die-passagierin-rolle-als-ss-mann": {
	id: "map-datum-2025-06-09t19-00-00-000z-vorstellung-die-passagierin-rolle-als-ss-mann";
  collection: "termine";
  data: any
};
"map-datum-2025-09-20t19-30-00-000-02-00-vorstellung-kleist-rolle-als-diomedes-ruprecht": {
	id: "map-datum-2025-09-20t19-30-00-000-02-00-vorstellung-kleist-rolle-als-diomedes-ruprecht";
  collection: "termine";
  data: any
};
"map-datum-2025-10-05t19-30-00-000-02-00-vorstellung-kleist-rolle-diomedes-ruprecht": {
	id: "map-datum-2025-10-05t19-30-00-000-02-00-vorstellung-kleist-rolle-diomedes-ruprecht";
  collection: "termine";
  data: any
};
"map-datum-2025-11-07t19-30-00-000-01-00-vorstellung-kiss-me-kate-rolle-ganove": {
	id: "map-datum-2025-11-07t19-30-00-000-01-00-vorstellung-kiss-me-kate-rolle-ganove";
  collection: "termine";
  data: any
};
"map-datum-2025-11-15t23-00-00-000-01-00-rolle-als-diomedes-ruprecht-vorstellung-kleist": {
	id: "map-datum-2025-11-15t23-00-00-000-01-00-rolle-als-diomedes-ruprecht-vorstellung-kleist";
  collection: "termine";
  data: any
};
"map-datum-2025-11-16t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2025-11-16t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2025-11-18t23-00-00-000-01-00-vorstellung-kleist-rolle-als-diomedes-ruprecht": {
	id: "map-datum-2025-11-18t23-00-00-000-01-00-vorstellung-kleist-rolle-als-diomedes-ruprecht";
  collection: "termine";
  data: any
};
"map-datum-2025-11-30t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2025-11-30t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2025-12-04t23-00-00-000-01-00-vorstellung-hänsel-rolle-als-knusperhexe": {
	id: "map-datum-2025-12-04t23-00-00-000-01-00-vorstellung-hänsel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2025-12-12t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2025-12-12t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2025-12-14t23-00-00-000-01-00-vorstellung-hänsel-rolle-als-knusperhexe": {
	id: "map-datum-2025-12-14t23-00-00-000-01-00-vorstellung-hänsel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2025-12-15t23-00-00-000-01-00-vorstellung-hänsel-rolle-als-knusperhexe": {
	id: "map-datum-2025-12-15t23-00-00-000-01-00-vorstellung-hänsel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2025-12-19t23-00-00-000-01-00-vorstellung-kleist-rolle-als-diomedes-ruprecht": {
	id: "map-datum-2025-12-19t23-00-00-000-01-00-vorstellung-kleist-rolle-als-diomedes-ruprecht";
  collection: "termine";
  data: any
};
"map-datum-2025-12-23t23-00-00-000-01-00-vorstellung-hänsel-rolle-als-knusperhexe": {
	id: "map-datum-2025-12-23t23-00-00-000-01-00-vorstellung-hänsel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2025-12-26t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2025-12-26t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2026-01-04t23-00-00-000-01-00-vorstellung-hänsel-rolle-als-knusperhexe": {
	id: "map-datum-2026-01-04t23-00-00-000-01-00-vorstellung-hänsel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2026-01-09t23-00-00-000-01-00-vorstellung-kleist-rolle-als-diomedes-ruprecht": {
	id: "map-datum-2026-01-09t23-00-00-000-01-00-vorstellung-kleist-rolle-als-diomedes-ruprecht";
  collection: "termine";
  data: any
};
"map-datum-2026-01-16t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2026-01-16t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2026-01-18t23-00-00-000-01-00-vorstellung-hänsel-rolle-als-knusperhexe": {
	id: "map-datum-2026-01-18t23-00-00-000-01-00-vorstellung-hänsel-rolle-als-knusperhexe";
  collection: "termine";
  data: any
};
"map-datum-2026-01-24t23-00-00-000-01-00-vorstellung-barbiere-rolle-als-fiorello": {
	id: "map-datum-2026-01-24t23-00-00-000-01-00-vorstellung-barbiere-rolle-als-fiorello";
  collection: "termine";
  data: any
};
"map-datum-2026-01-30t23-00-00-000-01-00-vorstellung-barbiere-rolle-als-fiorello": {
	id: "map-datum-2026-01-30t23-00-00-000-01-00-vorstellung-barbiere-rolle-als-fiorello";
  collection: "termine";
  data: any
};
"map-datum-2026-01-31t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2026-01-31t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2026-02-08t23-00-00-000-01-00-vorstellung-barbiere-rolle-als-fiorello": {
	id: "map-datum-2026-02-08t23-00-00-000-01-00-vorstellung-barbiere-rolle-als-fiorello";
  collection: "termine";
  data: any
};
"map-datum-2026-02-14t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2026-02-14t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2026-02-20t23-00-00-000-01-00-vorstellung-barbiere-rolle-als-fiorello": {
	id: "map-datum-2026-02-20t23-00-00-000-01-00-vorstellung-barbiere-rolle-als-fiorello";
  collection: "termine";
  data: any
};
"map-datum-2026-02-27t23-00-00-000-01-00-vorstellung-barbiere-rolle-als-fiorello": {
	id: "map-datum-2026-02-27t23-00-00-000-01-00-vorstellung-barbiere-rolle-als-fiorello";
  collection: "termine";
  data: any
};
"map-datum-2026-03-05t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2026-03-05t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2026-03-14t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2026-03-14t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2026-03-15t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2026-03-15t23-00-00-000-01-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2026-03-21t23-00-00-000-01-00-vorstellung-tote-stadt-rolle-als-graf-albert": {
	id: "map-datum-2026-03-21t23-00-00-000-01-00-vorstellung-tote-stadt-rolle-als-graf-albert";
  collection: "termine";
  data: any
};
"map-datum-2026-03-27t23-00-00-000-01-00-vorstellung-tote-stadt-rolle-als-graf-albert": {
	id: "map-datum-2026-03-27t23-00-00-000-01-00-vorstellung-tote-stadt-rolle-als-graf-albert";
  collection: "termine";
  data: any
};
"map-datum-2026-04-04t23-00-00-000-02-00-vorstellung-tote-stadt-rolle-als-graf-albert": {
	id: "map-datum-2026-04-04t23-00-00-000-02-00-vorstellung-tote-stadt-rolle-als-graf-albert";
  collection: "termine";
  data: any
};
"map-datum-2026-04-06t23-00-00-000-02-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2026-04-06t23-00-00-000-02-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2026-04-11t23-00-00-000-02-00-vorstellung-barbiere-rolle-als-fiorello": {
	id: "map-datum-2026-04-11t23-00-00-000-02-00-vorstellung-barbiere-rolle-als-fiorello";
  collection: "termine";
  data: any
};
"map-datum-2026-04-17t23-00-00-000-02-00-vorstellung-barbiere-rolle-als-fiorello": {
	id: "map-datum-2026-04-17t23-00-00-000-02-00-vorstellung-barbiere-rolle-als-fiorello";
  collection: "termine";
  data: any
};
"map-datum-2026-04-24t23-00-00-000-02-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2026-04-24t23-00-00-000-02-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2026-05-02t23-00-00-000-02-00-vorstellung-barbiere-rolle-als-fiorello": {
	id: "map-datum-2026-05-02t23-00-00-000-02-00-vorstellung-barbiere-rolle-als-fiorello";
  collection: "termine";
  data: any
};
"map-datum-2026-05-09t23-00-00-000-02-00-vorstellung-tote-stadt-rolle-als-graf-albert": {
	id: "map-datum-2026-05-09t23-00-00-000-02-00-vorstellung-tote-stadt-rolle-als-graf-albert";
  collection: "termine";
  data: any
};
"map-datum-2026-05-17t23-00-00-000-02-00-vorstellung-barbiere-rolle-als-fiorello": {
	id: "map-datum-2026-05-17t23-00-00-000-02-00-vorstellung-barbiere-rolle-als-fiorello";
  collection: "termine";
  data: any
};
"map-datum-2026-05-22t23-00-00-000-02-00-vorstellung-tote-stadt-rolle-als-graf-albert": {
	id: "map-datum-2026-05-22t23-00-00-000-02-00-vorstellung-tote-stadt-rolle-als-graf-albert";
  collection: "termine";
  data: any
};
"map-datum-2026-05-29t23-00-00-000-02-00-vorstellung-kate-rolle-als-ganove": {
	id: "map-datum-2026-05-29t23-00-00-000-02-00-vorstellung-kate-rolle-als-ganove";
  collection: "termine";
  data: any
};
"map-datum-2026-06-04t23-00-00-000-02-00-vorstellung-barbiere-rolle-als-fiorello": {
	id: "map-datum-2026-06-04t23-00-00-000-02-00-vorstellung-barbiere-rolle-als-fiorello";
  collection: "termine";
  data: any
};
"map-datum-2026-06-19t23-00-00-000-02-00-vorstellung-barbiere-rolle-als-fiorello": {
	id: "map-datum-2026-06-19t23-00-00-000-02-00-vorstellung-barbiere-rolle-als-fiorello";
  collection: "termine";
  data: any
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
