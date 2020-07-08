/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetManualDepreciationRequestBuilder } from './AssetManualDepreciationRequestBuilder';
import { Moment } from 'moment';
import { AssetDocumentLine, AssetDocumentLineField } from './AssetDocumentLine';
import { AssetDocumentAreaJournal, AssetDocumentAreaJournalField } from './AssetDocumentAreaJournal';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "AssetManualDepreciation" of service "SAPB1".
 */
export class AssetManualDepreciation extends Entity implements AssetManualDepreciationType {
  /**
   * Technical entity name for AssetManualDepreciation.
   */
  static _entityName = 'AssetManualDepreciation';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AssetManualDepreciation.
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
   * Returns an entity builder to construct instances `AssetManualDepreciation`.
   * @returns A builder that constructs instances of entity type `AssetManualDepreciation`.
   */
  static builder(): EntityBuilderType<AssetManualDepreciation, AssetManualDepreciationTypeForceMandatory> {
    return Entity.entityBuilder(AssetManualDepreciation);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AssetManualDepreciation` entity type.
   * @returns A `AssetManualDepreciation` request builder.
   */
  static requestBuilder(): AssetManualDepreciationRequestBuilder {
    return new AssetManualDepreciationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetManualDepreciation`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AssetManualDepreciation`.
   */
  static customField(fieldName: string): CustomField<AssetManualDepreciation> {
    return Entity.customFieldSelector(fieldName, AssetManualDepreciation);
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

export namespace AssetManualDepreciation {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<AssetManualDepreciation> = new NumberField('DocEntry', AssetManualDepreciation, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<AssetManualDepreciation> = new NumberField('DocNum', AssetManualDepreciation, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<AssetManualDepreciation> = new NumberField('Series', AssetManualDepreciation, 'Edm.Int32');
  /**
   * Static representation of the [[postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_DATE: DateField<AssetManualDepreciation> = new DateField('PostingDate', AssetManualDepreciation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DATE: DateField<AssetManualDepreciation> = new DateField('DocumentDate', AssetManualDepreciation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<AssetManualDepreciation> = new StringField('Remarks', AssetManualDepreciation, 'Edm.String');
  /**
   * Static representation of the [[reference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE: StringField<AssetManualDepreciation> = new StringField('Reference', AssetManualDepreciation, 'Edm.String');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<AssetManualDepreciation> = new StringField('Currency', AssetManualDepreciation, 'Edm.String');
  /**
   * Static representation of the [[documentRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_RATE: NumberField<AssetManualDepreciation> = new NumberField('DocumentRate', AssetManualDepreciation, 'Edm.Double');
  /**
   * Static representation of the [[documentTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL: NumberField<AssetManualDepreciation> = new NumberField('DocumentTotal', AssetManualDepreciation, 'Edm.Double');
  /**
   * Static representation of the [[documentTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL_FC: NumberField<AssetManualDepreciation> = new NumberField('DocumentTotalFC', AssetManualDepreciation, 'Edm.Double');
  /**
   * Static representation of the [[documentTotalSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL_SC: NumberField<AssetManualDepreciation> = new NumberField('DocumentTotalSC', AssetManualDepreciation, 'Edm.Double');
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<AssetManualDepreciation> = new DateField('AssetValueDate', AssetManualDepreciation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[manualDepreciationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_DEPRECIATION_TYPE: StringField<AssetManualDepreciation> = new StringField('ManualDepreciationType', AssetManualDepreciation, 'Edm.String');
  /**
   * Static representation of the [[cancellationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLATION_DATE: DateField<AssetManualDepreciation> = new DateField('CancellationDate', AssetManualDepreciation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[depreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREA: StringField<AssetManualDepreciation> = new StringField('DepreciationArea', AssetManualDepreciation, 'Edm.String');
  /**
   * Static representation of the [[bplId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID: NumberField<AssetManualDepreciation> = new NumberField('BPLId', AssetManualDepreciation, 'Edm.Int32');
  /**
   * Static representation of the [[origin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGIN: NumberField<AssetManualDepreciation> = new NumberField('Origin', AssetManualDepreciation, 'Edm.Int32');
  /**
   * Static representation of the [[baseReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_REFERENCE: StringField<AssetManualDepreciation> = new StringField('BaseReference', AssetManualDepreciation, 'Edm.String');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<AssetManualDepreciation> = new StringField('BPLName', AssetManualDepreciation, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<AssetManualDepreciation> = new StringField('VATRegNum', AssetManualDepreciation, 'Edm.String');
  /**
   * Static representation of the [[assetDocumentLineCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DOCUMENT_LINE_COLLECTION: CollectionField<AssetManualDepreciation> = new CollectionField('AssetDocumentLineCollection', AssetManualDepreciation, new AssetDocumentLineField('', AssetManualDepreciation));
  /**
   * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION: CollectionField<AssetManualDepreciation> = new CollectionField('AssetDocumentAreaJournalCollection', AssetManualDepreciation, new AssetDocumentAreaJournalField('', AssetManualDepreciation));
  /**
   * Static representation of the one-to-one navigation property [[currency2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_2: OneToOneLink<AssetManualDepreciation, Currencies> = new OneToOneLink('Currency2', AssetManualDepreciation, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[depreciationType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_TYPE: OneToOneLink<AssetManualDepreciation, DepreciationTypes> = new OneToOneLink('DepreciationType', AssetManualDepreciation, DepreciationTypes);
  /**
   * Static representation of the one-to-one navigation property [[depreciationArea2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREA_2: OneToOneLink<AssetManualDepreciation, DepreciationAreas> = new OneToOneLink('DepreciationArea2', AssetManualDepreciation, DepreciationAreas);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<AssetManualDepreciation, BusinessPlaces> = new OneToOneLink('BusinessPlace', AssetManualDepreciation, BusinessPlaces);
  /**
   * All fields of the AssetManualDepreciation entity.
   */
  export const _allFields: Array<NumberField<AssetManualDepreciation> | DateField<AssetManualDepreciation> | StringField<AssetManualDepreciation> | CollectionField<AssetManualDepreciation> | OneToOneLink<AssetManualDepreciation, Currencies> | OneToOneLink<AssetManualDepreciation, DepreciationTypes> | OneToOneLink<AssetManualDepreciation, DepreciationAreas> | OneToOneLink<AssetManualDepreciation, BusinessPlaces>> = [
    AssetManualDepreciation.DOC_ENTRY,
    AssetManualDepreciation.DOC_NUM,
    AssetManualDepreciation.SERIES,
    AssetManualDepreciation.POSTING_DATE,
    AssetManualDepreciation.DOCUMENT_DATE,
    AssetManualDepreciation.REMARKS,
    AssetManualDepreciation.REFERENCE,
    AssetManualDepreciation.CURRENCY,
    AssetManualDepreciation.DOCUMENT_RATE,
    AssetManualDepreciation.DOCUMENT_TOTAL,
    AssetManualDepreciation.DOCUMENT_TOTAL_FC,
    AssetManualDepreciation.DOCUMENT_TOTAL_SC,
    AssetManualDepreciation.ASSET_VALUE_DATE,
    AssetManualDepreciation.MANUAL_DEPRECIATION_TYPE,
    AssetManualDepreciation.CANCELLATION_DATE,
    AssetManualDepreciation.DEPRECIATION_AREA,
    AssetManualDepreciation.BPL_ID,
    AssetManualDepreciation.ORIGIN,
    AssetManualDepreciation.BASE_REFERENCE,
    AssetManualDepreciation.BPL_NAME,
    AssetManualDepreciation.VAT_REG_NUM,
    AssetManualDepreciation.ASSET_DOCUMENT_LINE_COLLECTION,
    AssetManualDepreciation.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION,
    AssetManualDepreciation.CURRENCY_2,
    AssetManualDepreciation.DEPRECIATION_TYPE,
    AssetManualDepreciation.DEPRECIATION_AREA_2,
    AssetManualDepreciation.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AssetManualDepreciation> = new AllFields('*', AssetManualDepreciation);
  /**
   * All key fields of the AssetManualDepreciation entity.
   */
  export const _keyFields: Array<Field<AssetManualDepreciation>> = [AssetManualDepreciation.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property AssetManualDepreciation.
   */
  export const _keys: { [keys: string]: Field<AssetManualDepreciation> } = AssetManualDepreciation._keyFields.reduce((acc: { [keys: string]: Field<AssetManualDepreciation> }, field: Field<AssetManualDepreciation>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
