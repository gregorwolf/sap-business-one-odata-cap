/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetCapitalizationCreditMemoRequestBuilder } from './AssetCapitalizationCreditMemoRequestBuilder';
import { Moment } from 'moment';
import { AssetDocumentLine, AssetDocumentLineField } from './AssetDocumentLine';
import { AssetDocumentAreaJournal, AssetDocumentAreaJournalField } from './AssetDocumentAreaJournal';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "AssetCapitalizationCreditMemo" of service "SAPB1".
 */
export class AssetCapitalizationCreditMemo extends Entity implements AssetCapitalizationCreditMemoType {
  /**
   * Technical entity name for AssetCapitalizationCreditMemo.
   */
  static _entityName = 'AssetCapitalizationCreditMemo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AssetCapitalizationCreditMemo.
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
   * Returns an entity builder to construct instances `AssetCapitalizationCreditMemo`.
   * @returns A builder that constructs instances of entity type `AssetCapitalizationCreditMemo`.
   */
  static builder(): EntityBuilderType<AssetCapitalizationCreditMemo, AssetCapitalizationCreditMemoTypeForceMandatory> {
    return Entity.entityBuilder(AssetCapitalizationCreditMemo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AssetCapitalizationCreditMemo` entity type.
   * @returns A `AssetCapitalizationCreditMemo` request builder.
   */
  static requestBuilder(): AssetCapitalizationCreditMemoRequestBuilder {
    return new AssetCapitalizationCreditMemoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetCapitalizationCreditMemo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AssetCapitalizationCreditMemo`.
   */
  static customField(fieldName: string): CustomField<AssetCapitalizationCreditMemo> {
    return Entity.customFieldSelector(fieldName, AssetCapitalizationCreditMemo);
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

export interface AssetCapitalizationCreditMemoType {
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

export interface AssetCapitalizationCreditMemoTypeForceMandatory {
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

export namespace AssetCapitalizationCreditMemo {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<AssetCapitalizationCreditMemo> = new NumberField('DocEntry', AssetCapitalizationCreditMemo, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<AssetCapitalizationCreditMemo> = new NumberField('DocNum', AssetCapitalizationCreditMemo, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<AssetCapitalizationCreditMemo> = new NumberField('Series', AssetCapitalizationCreditMemo, 'Edm.Int32');
  /**
   * Static representation of the [[postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_DATE: DateField<AssetCapitalizationCreditMemo> = new DateField('PostingDate', AssetCapitalizationCreditMemo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DATE: DateField<AssetCapitalizationCreditMemo> = new DateField('DocumentDate', AssetCapitalizationCreditMemo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<AssetCapitalizationCreditMemo> = new StringField('Remarks', AssetCapitalizationCreditMemo, 'Edm.String');
  /**
   * Static representation of the [[reference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE: StringField<AssetCapitalizationCreditMemo> = new StringField('Reference', AssetCapitalizationCreditMemo, 'Edm.String');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<AssetCapitalizationCreditMemo> = new StringField('Currency', AssetCapitalizationCreditMemo, 'Edm.String');
  /**
   * Static representation of the [[documentRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_RATE: NumberField<AssetCapitalizationCreditMemo> = new NumberField('DocumentRate', AssetCapitalizationCreditMemo, 'Edm.Double');
  /**
   * Static representation of the [[documentTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL: NumberField<AssetCapitalizationCreditMemo> = new NumberField('DocumentTotal', AssetCapitalizationCreditMemo, 'Edm.Double');
  /**
   * Static representation of the [[documentTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL_FC: NumberField<AssetCapitalizationCreditMemo> = new NumberField('DocumentTotalFC', AssetCapitalizationCreditMemo, 'Edm.Double');
  /**
   * Static representation of the [[documentTotalSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL_SC: NumberField<AssetCapitalizationCreditMemo> = new NumberField('DocumentTotalSC', AssetCapitalizationCreditMemo, 'Edm.Double');
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<AssetCapitalizationCreditMemo> = new DateField('AssetValueDate', AssetCapitalizationCreditMemo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[manualDepreciationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_DEPRECIATION_TYPE: StringField<AssetCapitalizationCreditMemo> = new StringField('ManualDepreciationType', AssetCapitalizationCreditMemo, 'Edm.String');
  /**
   * Static representation of the [[cancellationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLATION_DATE: DateField<AssetCapitalizationCreditMemo> = new DateField('CancellationDate', AssetCapitalizationCreditMemo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[depreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREA: StringField<AssetCapitalizationCreditMemo> = new StringField('DepreciationArea', AssetCapitalizationCreditMemo, 'Edm.String');
  /**
   * Static representation of the [[bplId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID: NumberField<AssetCapitalizationCreditMemo> = new NumberField('BPLId', AssetCapitalizationCreditMemo, 'Edm.Int32');
  /**
   * Static representation of the [[origin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGIN: NumberField<AssetCapitalizationCreditMemo> = new NumberField('Origin', AssetCapitalizationCreditMemo, 'Edm.Int32');
  /**
   * Static representation of the [[baseReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_REFERENCE: StringField<AssetCapitalizationCreditMemo> = new StringField('BaseReference', AssetCapitalizationCreditMemo, 'Edm.String');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<AssetCapitalizationCreditMemo> = new StringField('BPLName', AssetCapitalizationCreditMemo, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<AssetCapitalizationCreditMemo> = new StringField('VATRegNum', AssetCapitalizationCreditMemo, 'Edm.String');
  /**
   * Static representation of the [[assetDocumentLineCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DOCUMENT_LINE_COLLECTION: CollectionField<AssetCapitalizationCreditMemo> = new CollectionField('AssetDocumentLineCollection', AssetCapitalizationCreditMemo, new AssetDocumentLineField('', AssetCapitalizationCreditMemo));
  /**
   * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION: CollectionField<AssetCapitalizationCreditMemo> = new CollectionField('AssetDocumentAreaJournalCollection', AssetCapitalizationCreditMemo, new AssetDocumentAreaJournalField('', AssetCapitalizationCreditMemo));
  /**
   * Static representation of the one-to-one navigation property [[currency2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_2: OneToOneLink<AssetCapitalizationCreditMemo, Currencies> = new OneToOneLink('Currency2', AssetCapitalizationCreditMemo, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[depreciationType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_TYPE: OneToOneLink<AssetCapitalizationCreditMemo, DepreciationTypes> = new OneToOneLink('DepreciationType', AssetCapitalizationCreditMemo, DepreciationTypes);
  /**
   * Static representation of the one-to-one navigation property [[depreciationArea2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREA_2: OneToOneLink<AssetCapitalizationCreditMemo, DepreciationAreas> = new OneToOneLink('DepreciationArea2', AssetCapitalizationCreditMemo, DepreciationAreas);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<AssetCapitalizationCreditMemo, BusinessPlaces> = new OneToOneLink('BusinessPlace', AssetCapitalizationCreditMemo, BusinessPlaces);
  /**
   * All fields of the AssetCapitalizationCreditMemo entity.
   */
  export const _allFields: Array<NumberField<AssetCapitalizationCreditMemo> | DateField<AssetCapitalizationCreditMemo> | StringField<AssetCapitalizationCreditMemo> | CollectionField<AssetCapitalizationCreditMemo> | OneToOneLink<AssetCapitalizationCreditMemo, Currencies> | OneToOneLink<AssetCapitalizationCreditMemo, DepreciationTypes> | OneToOneLink<AssetCapitalizationCreditMemo, DepreciationAreas> | OneToOneLink<AssetCapitalizationCreditMemo, BusinessPlaces>> = [
    AssetCapitalizationCreditMemo.DOC_ENTRY,
    AssetCapitalizationCreditMemo.DOC_NUM,
    AssetCapitalizationCreditMemo.SERIES,
    AssetCapitalizationCreditMemo.POSTING_DATE,
    AssetCapitalizationCreditMemo.DOCUMENT_DATE,
    AssetCapitalizationCreditMemo.REMARKS,
    AssetCapitalizationCreditMemo.REFERENCE,
    AssetCapitalizationCreditMemo.CURRENCY,
    AssetCapitalizationCreditMemo.DOCUMENT_RATE,
    AssetCapitalizationCreditMemo.DOCUMENT_TOTAL,
    AssetCapitalizationCreditMemo.DOCUMENT_TOTAL_FC,
    AssetCapitalizationCreditMemo.DOCUMENT_TOTAL_SC,
    AssetCapitalizationCreditMemo.ASSET_VALUE_DATE,
    AssetCapitalizationCreditMemo.MANUAL_DEPRECIATION_TYPE,
    AssetCapitalizationCreditMemo.CANCELLATION_DATE,
    AssetCapitalizationCreditMemo.DEPRECIATION_AREA,
    AssetCapitalizationCreditMemo.BPL_ID,
    AssetCapitalizationCreditMemo.ORIGIN,
    AssetCapitalizationCreditMemo.BASE_REFERENCE,
    AssetCapitalizationCreditMemo.BPL_NAME,
    AssetCapitalizationCreditMemo.VAT_REG_NUM,
    AssetCapitalizationCreditMemo.ASSET_DOCUMENT_LINE_COLLECTION,
    AssetCapitalizationCreditMemo.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION,
    AssetCapitalizationCreditMemo.CURRENCY_2,
    AssetCapitalizationCreditMemo.DEPRECIATION_TYPE,
    AssetCapitalizationCreditMemo.DEPRECIATION_AREA_2,
    AssetCapitalizationCreditMemo.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AssetCapitalizationCreditMemo> = new AllFields('*', AssetCapitalizationCreditMemo);
  /**
   * All key fields of the AssetCapitalizationCreditMemo entity.
   */
  export const _keyFields: Array<Field<AssetCapitalizationCreditMemo>> = [AssetCapitalizationCreditMemo.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property AssetCapitalizationCreditMemo.
   */
  export const _keys: { [keys: string]: Field<AssetCapitalizationCreditMemo> } = AssetCapitalizationCreditMemo._keyFields.reduce((acc: { [keys: string]: Field<AssetCapitalizationCreditMemo> }, field: Field<AssetCapitalizationCreditMemo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
