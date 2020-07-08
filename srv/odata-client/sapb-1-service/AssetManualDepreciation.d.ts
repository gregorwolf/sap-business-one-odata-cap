import { AssetManualDepreciationRequestBuilder } from './AssetManualDepreciationRequestBuilder';
import { Moment } from 'moment';
import { AssetDocumentLine } from './AssetDocumentLine';
import { AssetDocumentAreaJournal } from './AssetDocumentAreaJournal';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "AssetManualDepreciation" of service "SAPB1".
 */
export declare class AssetManualDepreciation extends Entity implements AssetManualDepreciationType {
    /**
     * Technical entity name for AssetManualDepreciation.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AssetManualDepreciation.
     */
    static _serviceName: string;
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
     * Manual Depreciation Type.
     * @nullable
     */
    manualDepreciationType?: string;
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
     * Returns an entity builder to construct instances `AssetManualDepreciation`.
     * @returns A builder that constructs instances of entity type `AssetManualDepreciation`.
     */
    static builder(): EntityBuilderType<AssetManualDepreciation, AssetManualDepreciationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AssetManualDepreciation` entity type.
     * @returns A `AssetManualDepreciation` request builder.
     */
    static requestBuilder(): AssetManualDepreciationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetManualDepreciation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssetManualDepreciation`.
     */
    static customField(fieldName: string): CustomField<AssetManualDepreciation>;
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
export interface AssetManualDepreciationType {
    docEntry?: number;
    docNum?: number;
    series?: number;
    postingDate?: Moment;
    documentDate?: Moment;
    remarks?: string;
    reference?: string;
    currency?: string;
    documentRate?: number;
    documentTotal?: number;
    documentTotalFc?: number;
    documentTotalSc?: number;
    assetValueDate?: Moment;
    manualDepreciationType?: string;
    cancellationDate?: Moment;
    depreciationArea?: string;
    bplId?: number;
    origin?: number;
    baseReference?: string;
    bplName?: string;
    vatRegNum?: string;
    assetDocumentLineCollection?: AssetDocumentLine[];
    assetDocumentAreaJournalCollection?: AssetDocumentAreaJournal[];
    currency2: CurrenciesType;
    depreciationType: DepreciationTypesType;
    depreciationArea2: DepreciationAreasType;
    businessPlace: BusinessPlacesType;
}
export interface AssetManualDepreciationTypeForceMandatory {
    docEntry: number;
    docNum: number;
    series: number;
    postingDate: Moment;
    documentDate: Moment;
    remarks: string;
    reference: string;
    currency: string;
    documentRate: number;
    documentTotal: number;
    documentTotalFc: number;
    documentTotalSc: number;
    assetValueDate: Moment;
    manualDepreciationType: string;
    cancellationDate: Moment;
    depreciationArea: string;
    bplId: number;
    origin: number;
    baseReference: string;
    bplName: string;
    vatRegNum: string;
    assetDocumentLineCollection: AssetDocumentLine[];
    assetDocumentAreaJournalCollection: AssetDocumentAreaJournal[];
    currency2: CurrenciesType;
    depreciationType: DepreciationTypesType;
    depreciationArea2: DepreciationAreasType;
    businessPlace: BusinessPlacesType;
}
export declare namespace AssetManualDepreciation {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<AssetManualDepreciation>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<AssetManualDepreciation>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<AssetManualDepreciation>;
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_DATE: DateField<AssetManualDepreciation>;
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_DATE: DateField<AssetManualDepreciation>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<AssetManualDepreciation>;
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE: StringField<AssetManualDepreciation>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<AssetManualDepreciation>;
    /**
     * Static representation of the [[documentRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_RATE: NumberField<AssetManualDepreciation>;
    /**
     * Static representation of the [[documentTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TOTAL: NumberField<AssetManualDepreciation>;
    /**
     * Static representation of the [[documentTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TOTAL_FC: NumberField<AssetManualDepreciation>;
    /**
     * Static representation of the [[documentTotalSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TOTAL_SC: NumberField<AssetManualDepreciation>;
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_VALUE_DATE: DateField<AssetManualDepreciation>;
    /**
     * Static representation of the [[manualDepreciationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUAL_DEPRECIATION_TYPE: StringField<AssetManualDepreciation>;
    /**
     * Static representation of the [[cancellationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCELLATION_DATE: DateField<AssetManualDepreciation>;
    /**
     * Static representation of the [[depreciationArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_AREA: StringField<AssetManualDepreciation>;
    /**
     * Static representation of the [[bplId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_ID: NumberField<AssetManualDepreciation>;
    /**
     * Static representation of the [[origin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGIN: NumberField<AssetManualDepreciation>;
    /**
     * Static representation of the [[baseReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_REFERENCE: StringField<AssetManualDepreciation>;
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_NAME: StringField<AssetManualDepreciation>;
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REG_NUM: StringField<AssetManualDepreciation>;
    /**
     * Static representation of the [[assetDocumentLineCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_DOCUMENT_LINE_COLLECTION: CollectionField<AssetManualDepreciation>;
    /**
     * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION: CollectionField<AssetManualDepreciation>;
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_2: OneToOneLink<AssetManualDepreciation, Currencies>;
    /**
     * Static representation of the one-to-one navigation property [[depreciationType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_TYPE: OneToOneLink<AssetManualDepreciation, DepreciationTypes>;
    /**
     * Static representation of the one-to-one navigation property [[depreciationArea2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_AREA_2: OneToOneLink<AssetManualDepreciation, DepreciationAreas>;
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE: OneToOneLink<AssetManualDepreciation, BusinessPlaces>;
    /**
     * All fields of the AssetManualDepreciation entity.
     */
    const _allFields: Array<NumberField<AssetManualDepreciation> | DateField<AssetManualDepreciation> | StringField<AssetManualDepreciation> | CollectionField<AssetManualDepreciation> | OneToOneLink<AssetManualDepreciation, Currencies> | OneToOneLink<AssetManualDepreciation, DepreciationTypes> | OneToOneLink<AssetManualDepreciation, DepreciationAreas> | OneToOneLink<AssetManualDepreciation, BusinessPlaces>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AssetManualDepreciation>;
    /**
     * All key fields of the AssetManualDepreciation entity.
     */
    const _keyFields: Array<Field<AssetManualDepreciation>>;
    /**
     * Mapping of all key field names to the respective static field property AssetManualDepreciation.
     */
    const _keys: {
        [keys: string]: Field<AssetManualDepreciation>;
    };
}
//# sourceMappingURL=AssetManualDepreciation.d.ts.map