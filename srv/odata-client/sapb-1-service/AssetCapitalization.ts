/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetCapitalizationRequestBuilder } from './AssetCapitalizationRequestBuilder';
import { Moment } from 'moment';
import { AssetDocumentLine, AssetDocumentLineField } from './AssetDocumentLine';
import { AssetDocumentAreaJournal, AssetDocumentAreaJournalField } from './AssetDocumentAreaJournal';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "AssetCapitalization" of service "SAPB1".
 */
export class AssetCapitalization extends Entity implements AssetCapitalizationType {
  /**
   * Technical entity name for AssetCapitalization.
   */
  static _entityName = 'AssetCapitalization';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AssetCapitalization.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  currency2!: Currencies;
  /**
   * One-to-one navigation property to the [[DepreciationTypes]] entity.
   */
  depreciationType!: DepreciationTypes;
  /**
   * One-to-one navigation property to the [[DepreciationAreas]] entity.
   */
  depreciationArea2!: DepreciationAreas;
  /**
   * One-to-one navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlace!: BusinessPlaces;

  /**
   * Returns an entity builder to construct instances `AssetCapitalization`.
   * @returns A builder that constructs instances of entity type `AssetCapitalization`.
   */
  static builder(): EntityBuilderType<AssetCapitalization, AssetCapitalizationTypeForceMandatory> {
    return Entity.entityBuilder(AssetCapitalization);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AssetCapitalization` entity type.
   * @returns A `AssetCapitalization` request builder.
   */
  static requestBuilder(): AssetCapitalizationRequestBuilder {
    return new AssetCapitalizationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetCapitalization`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AssetCapitalization`.
   */
  static customField(fieldName: string): CustomField<AssetCapitalization> {
    return Entity.customFieldSelector(fieldName, AssetCapitalization);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Currencies, CurrenciesType } from './Currencies';
import { DepreciationTypes, DepreciationTypesType } from './DepreciationTypes';
import { DepreciationAreas, DepreciationAreasType } from './DepreciationAreas';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

export interface AssetCapitalizationType {
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

export interface AssetCapitalizationTypeForceMandatory {
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

export namespace AssetCapitalization {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<AssetCapitalization> = new NumberField('DocEntry', AssetCapitalization, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<AssetCapitalization> = new NumberField('DocNum', AssetCapitalization, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<AssetCapitalization> = new NumberField('Series', AssetCapitalization, 'Edm.Int32');
  /**
   * Static representation of the [[postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_DATE: DateField<AssetCapitalization> = new DateField('PostingDate', AssetCapitalization, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DATE: DateField<AssetCapitalization> = new DateField('DocumentDate', AssetCapitalization, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<AssetCapitalization> = new StringField('Remarks', AssetCapitalization, 'Edm.String');
  /**
   * Static representation of the [[reference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE: StringField<AssetCapitalization> = new StringField('Reference', AssetCapitalization, 'Edm.String');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<AssetCapitalization> = new StringField('Currency', AssetCapitalization, 'Edm.String');
  /**
   * Static representation of the [[documentRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_RATE: NumberField<AssetCapitalization> = new NumberField('DocumentRate', AssetCapitalization, 'Edm.Double');
  /**
   * Static representation of the [[documentTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL: NumberField<AssetCapitalization> = new NumberField('DocumentTotal', AssetCapitalization, 'Edm.Double');
  /**
   * Static representation of the [[documentTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL_FC: NumberField<AssetCapitalization> = new NumberField('DocumentTotalFC', AssetCapitalization, 'Edm.Double');
  /**
   * Static representation of the [[documentTotalSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL_SC: NumberField<AssetCapitalization> = new NumberField('DocumentTotalSC', AssetCapitalization, 'Edm.Double');
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<AssetCapitalization> = new DateField('AssetValueDate', AssetCapitalization, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[manualDepreciationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_DEPRECIATION_TYPE: StringField<AssetCapitalization> = new StringField('ManualDepreciationType', AssetCapitalization, 'Edm.String');
  /**
   * Static representation of the [[cancellationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLATION_DATE: DateField<AssetCapitalization> = new DateField('CancellationDate', AssetCapitalization, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[depreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREA: StringField<AssetCapitalization> = new StringField('DepreciationArea', AssetCapitalization, 'Edm.String');
  /**
   * Static representation of the [[bplId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID: NumberField<AssetCapitalization> = new NumberField('BPLId', AssetCapitalization, 'Edm.Int32');
  /**
   * Static representation of the [[origin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGIN: NumberField<AssetCapitalization> = new NumberField('Origin', AssetCapitalization, 'Edm.Int32');
  /**
   * Static representation of the [[baseReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_REFERENCE: StringField<AssetCapitalization> = new StringField('BaseReference', AssetCapitalization, 'Edm.String');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<AssetCapitalization> = new StringField('BPLName', AssetCapitalization, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<AssetCapitalization> = new StringField('VATRegNum', AssetCapitalization, 'Edm.String');
  /**
   * Static representation of the [[assetDocumentLineCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DOCUMENT_LINE_COLLECTION: CollectionField<AssetCapitalization> = new CollectionField('AssetDocumentLineCollection', AssetCapitalization, new AssetDocumentLineField('', AssetCapitalization));
  /**
   * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION: CollectionField<AssetCapitalization> = new CollectionField('AssetDocumentAreaJournalCollection', AssetCapitalization, new AssetDocumentAreaJournalField('', AssetCapitalization));
  /**
   * Static representation of the one-to-one navigation property [[currency2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_2: OneToOneLink<AssetCapitalization, Currencies> = new OneToOneLink('Currency2', AssetCapitalization, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[depreciationType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_TYPE: OneToOneLink<AssetCapitalization, DepreciationTypes> = new OneToOneLink('DepreciationType', AssetCapitalization, DepreciationTypes);
  /**
   * Static representation of the one-to-one navigation property [[depreciationArea2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREA_2: OneToOneLink<AssetCapitalization, DepreciationAreas> = new OneToOneLink('DepreciationArea2', AssetCapitalization, DepreciationAreas);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<AssetCapitalization, BusinessPlaces> = new OneToOneLink('BusinessPlace', AssetCapitalization, BusinessPlaces);
  /**
   * All fields of the AssetCapitalization entity.
   */
  export const _allFields: Array<NumberField<AssetCapitalization> | DateField<AssetCapitalization> | StringField<AssetCapitalization> | CollectionField<AssetCapitalization> | OneToOneLink<AssetCapitalization, Currencies> | OneToOneLink<AssetCapitalization, DepreciationTypes> | OneToOneLink<AssetCapitalization, DepreciationAreas> | OneToOneLink<AssetCapitalization, BusinessPlaces>> = [
    AssetCapitalization.DOC_ENTRY,
    AssetCapitalization.DOC_NUM,
    AssetCapitalization.SERIES,
    AssetCapitalization.POSTING_DATE,
    AssetCapitalization.DOCUMENT_DATE,
    AssetCapitalization.REMARKS,
    AssetCapitalization.REFERENCE,
    AssetCapitalization.CURRENCY,
    AssetCapitalization.DOCUMENT_RATE,
    AssetCapitalization.DOCUMENT_TOTAL,
    AssetCapitalization.DOCUMENT_TOTAL_FC,
    AssetCapitalization.DOCUMENT_TOTAL_SC,
    AssetCapitalization.ASSET_VALUE_DATE,
    AssetCapitalization.MANUAL_DEPRECIATION_TYPE,
    AssetCapitalization.CANCELLATION_DATE,
    AssetCapitalization.DEPRECIATION_AREA,
    AssetCapitalization.BPL_ID,
    AssetCapitalization.ORIGIN,
    AssetCapitalization.BASE_REFERENCE,
    AssetCapitalization.BPL_NAME,
    AssetCapitalization.VAT_REG_NUM,
    AssetCapitalization.ASSET_DOCUMENT_LINE_COLLECTION,
    AssetCapitalization.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION,
    AssetCapitalization.CURRENCY_2,
    AssetCapitalization.DEPRECIATION_TYPE,
    AssetCapitalization.DEPRECIATION_AREA_2,
    AssetCapitalization.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AssetCapitalization> = new AllFields('*', AssetCapitalization);
  /**
   * All key fields of the AssetCapitalization entity.
   */
  export const _keyFields: Array<Field<AssetCapitalization>> = [AssetCapitalization.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property AssetCapitalization.
   */
  export const _keys: { [keys: string]: Field<AssetCapitalization> } = AssetCapitalization._keyFields.reduce((acc: { [keys: string]: Field<AssetCapitalization> }, field: Field<AssetCapitalization>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
