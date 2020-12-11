import { AssetRetirementRequestBuilder } from './AssetRetirementRequestBuilder';
import { Moment } from 'moment';
import { AssetDocumentLine } from './AssetDocumentLine';
import { AssetDocumentAreaJournal } from './AssetDocumentAreaJournal';
import { AssetDocumentStatusEnum } from './AssetDocumentStatusEnum';
import { AssetDocumentTypeEnum } from './AssetDocumentTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ClosingOptionEnum } from './ClosingOptionEnum';
import { AssetOriginalTypeEnum } from './AssetOriginalTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AssetRetirement" of service "SAPB1".
 */
export declare class AssetRetirement extends EntityV4 implements AssetRetirementType {
    /**
     * Technical entity name for AssetRetirement.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Doc Num.
     * @nullable
     */
    docNum?: number;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Posting Date.
     * @nullable
     */
    postingDate?: Moment;
    /**
     * Document Date.
     * @nullable
     */
    documentDate?: Moment;
    /**
     * Status.
     * @nullable
     */
    status?: AssetDocumentStatusEnum;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Reference.
     * @nullable
     */
    reference?: string;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Document Rate.
     * @nullable
     */
    documentRate?: number;
    /**
     * Document Total.
     * @nullable
     */
    documentTotal?: number;
    /**
     * Document Total Fc.
     * @nullable
     */
    documentTotalFc?: number;
    /**
     * Document Total Sc.
     * @nullable
     */
    documentTotalSc?: number;
    /**
     * Asset Value Date.
     * @nullable
     */
    assetValueDate?: Moment;
    /**
     * Document Type.
     * @nullable
     */
    documentType?: AssetDocumentTypeEnum;
    /**
     * Summerize By Projects.
     * @nullable
     */
    summerizeByProjects?: BoYesNoEnum;
    /**
     * Summerize By Distribution Rules.
     * @nullable
     */
    summerizeByDistributionRules?: BoYesNoEnum;
    /**
     * Manual Depreciation Type.
     * @nullable
     */
    manualDepreciationType?: string;
    /**
     * Hand Written.
     * @nullable
     */
    handWritten?: BoYesNoEnum;
    /**
     * Cancellation Date.
     * @nullable
     */
    cancellationDate?: Moment;
    /**
     * Depreciation Area.
     * @nullable
     */
    depreciationArea?: string;
    /**
     * Bpl Id.
     * @nullable
     */
    bplId?: number;
    /**
     * Origin.
     * @nullable
     */
    origin?: number;
    /**
     * Low Value Asset Retirement.
     * @nullable
     */
    lowValueAssetRetirement?: BoYesNoEnum;
    /**
     * Cancellation Option.
     * @nullable
     */
    cancellationOption?: ClosingOptionEnum;
    /**
     * Original Type.
     * @nullable
     */
    originalType?: AssetOriginalTypeEnum;
    /**
     * Base Reference.
     * @nullable
     */
    baseReference?: string;
    /**
     * Bpl Name.
     * @nullable
     */
    bplName?: string;
    /**
     * Vat Reg Num.
     * @nullable
     */
    vatRegNum?: string;
    /**
     * Asset Document Line Collection.
     * @nullable
     */
    assetDocumentLineCollection?: AssetDocumentLine[];
    /**
     * Asset Document Area Journal Collection.
     * @nullable
     */
    assetDocumentAreaJournalCollection?: AssetDocumentAreaJournal[];
    /**
     * One-to-one navigation property to the [[Currencies]] entity.
     */
    currency2: Currencies;
    /**
     * One-to-one navigation property to the [[DepreciationTypes]] entity.
     */
    depreciationType: DepreciationTypes;
    /**
     * One-to-one navigation property to the [[DepreciationAreas]] entity.
     */
    depreciationArea2: DepreciationAreas;
    /**
     * One-to-one navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlace: BusinessPlaces;
    /**
     * Returns an entity builder to construct instances of `AssetRetirement`.
     * @returns A builder that constructs instances of entity type `AssetRetirement`.
     */
    static builder(): EntityBuilderType<AssetRetirement, AssetRetirementType>;
    /**
     * Returns a request builder to construct requests for operations on the `AssetRetirement` entity type.
     * @returns A `AssetRetirement` request builder.
     */
    static requestBuilder(): AssetRetirementRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetRetirement`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssetRetirement`.
     */
    static customField(fieldName: string): CustomFieldV4<AssetRetirement>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Currencies, CurrenciesType } from './Currencies';
import { DepreciationTypes, DepreciationTypesType } from './DepreciationTypes';
import { DepreciationAreas, DepreciationAreasType } from './DepreciationAreas';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
export interface AssetRetirementType {
    docEntry?: number | null;
    docNum?: number | null;
    series?: number | null;
    postingDate?: Moment | null;
    documentDate?: Moment | null;
    status?: AssetDocumentStatusEnum | null;
    remarks?: string | null;
    reference?: string | null;
    currency?: string | null;
    documentRate?: number | null;
    documentTotal?: number | null;
    documentTotalFc?: number | null;
    documentTotalSc?: number | null;
    assetValueDate?: Moment | null;
    documentType?: AssetDocumentTypeEnum | null;
    summerizeByProjects?: BoYesNoEnum | null;
    summerizeByDistributionRules?: BoYesNoEnum | null;
    manualDepreciationType?: string | null;
    handWritten?: BoYesNoEnum | null;
    cancellationDate?: Moment | null;
    depreciationArea?: string | null;
    bplId?: number | null;
    origin?: number | null;
    lowValueAssetRetirement?: BoYesNoEnum | null;
    cancellationOption?: ClosingOptionEnum | null;
    originalType?: AssetOriginalTypeEnum | null;
    baseReference?: string | null;
    bplName?: string | null;
    vatRegNum?: string | null;
    assetDocumentLineCollection?: AssetDocumentLine[] | null;
    assetDocumentAreaJournalCollection?: AssetDocumentAreaJournal[] | null;
    currency2: CurrenciesType;
    depreciationType: DepreciationTypesType;
    depreciationArea2: DepreciationAreasType;
    businessPlace: BusinessPlacesType;
}
export declare namespace AssetRetirement {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<AssetRetirement>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<AssetRetirement>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<AssetRetirement>;
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_DATE: DateField<AssetRetirement>;
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_DATE: DateField<AssetRetirement>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: EnumField<AssetRetirement>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<AssetRetirement>;
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE: StringField<AssetRetirement>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<AssetRetirement>;
    /**
     * Static representation of the [[documentRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_RATE: NumberField<AssetRetirement>;
    /**
     * Static representation of the [[documentTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TOTAL: NumberField<AssetRetirement>;
    /**
     * Static representation of the [[documentTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TOTAL_FC: NumberField<AssetRetirement>;
    /**
     * Static representation of the [[documentTotalSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TOTAL_SC: NumberField<AssetRetirement>;
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_VALUE_DATE: DateField<AssetRetirement>;
    /**
     * Static representation of the [[documentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TYPE: EnumField<AssetRetirement>;
    /**
     * Static representation of the [[summerizeByProjects]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUMMERIZE_BY_PROJECTS: EnumField<AssetRetirement>;
    /**
     * Static representation of the [[summerizeByDistributionRules]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUMMERIZE_BY_DISTRIBUTION_RULES: EnumField<AssetRetirement>;
    /**
     * Static representation of the [[manualDepreciationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUAL_DEPRECIATION_TYPE: StringField<AssetRetirement>;
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAND_WRITTEN: EnumField<AssetRetirement>;
    /**
     * Static representation of the [[cancellationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCELLATION_DATE: DateField<AssetRetirement>;
    /**
     * Static representation of the [[depreciationArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_AREA: StringField<AssetRetirement>;
    /**
     * Static representation of the [[bplId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_ID: NumberField<AssetRetirement>;
    /**
     * Static representation of the [[origin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGIN: NumberField<AssetRetirement>;
    /**
     * Static representation of the [[lowValueAssetRetirement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOW_VALUE_ASSET_RETIREMENT: EnumField<AssetRetirement>;
    /**
     * Static representation of the [[cancellationOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCELLATION_OPTION: EnumField<AssetRetirement>;
    /**
     * Static representation of the [[originalType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_TYPE: EnumField<AssetRetirement>;
    /**
     * Static representation of the [[baseReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_REFERENCE: StringField<AssetRetirement>;
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_NAME: StringField<AssetRetirement>;
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REG_NUM: StringField<AssetRetirement>;
    /**
     * Static representation of the [[assetDocumentLineCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_DOCUMENT_LINE_COLLECTION: CollectionField<AssetRetirement, AssetDocumentLine>;
    /**
     * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION: CollectionField<AssetRetirement, AssetDocumentAreaJournal>;
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_2: OneToOneLink<AssetRetirement, Currencies>;
    /**
     * Static representation of the one-to-one navigation property [[depreciationType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_TYPE: OneToOneLink<AssetRetirement, DepreciationTypes>;
    /**
     * Static representation of the one-to-one navigation property [[depreciationArea2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_AREA_2: OneToOneLink<AssetRetirement, DepreciationAreas>;
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE: OneToOneLink<AssetRetirement, BusinessPlaces>;
    /**
     * All fields of the AssetRetirement entity.
     */
    const _allFields: Array<NumberField<AssetRetirement> | DateField<AssetRetirement> | EnumField<AssetRetirement> | StringField<AssetRetirement> | CollectionField<AssetRetirement, AssetDocumentLine> | CollectionField<AssetRetirement, AssetDocumentAreaJournal> | OneToOneLink<AssetRetirement, Currencies> | OneToOneLink<AssetRetirement, DepreciationTypes> | OneToOneLink<AssetRetirement, DepreciationAreas> | OneToOneLink<AssetRetirement, BusinessPlaces>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AssetRetirement>;
    /**
     * All key fields of the AssetRetirement entity.
     */
    const _keyFields: Array<Field<AssetRetirement>>;
    /**
     * Mapping of all key field names to the respective static field property AssetRetirement.
     */
    const _keys: {
        [keys: string]: Field<AssetRetirement>;
    };
}
//# sourceMappingURL=AssetRetirement.d.ts.map