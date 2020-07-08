/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetTransferRequestBuilder } from './AssetTransferRequestBuilder';
import { Moment } from 'moment';
import { AssetDocumentLine, AssetDocumentLineField } from './AssetDocumentLine';
import { AssetDocumentAreaJournal, AssetDocumentAreaJournalField } from './AssetDocumentAreaJournal';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "AssetTransfer" of service "SAPB1".
 */
export class AssetTransfer extends Entity implements AssetTransferType {
  /**
   * Technical entity name for AssetTransfer.
   */
  static _entityName = 'AssetTransfer';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AssetTransfer.
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
   * Returns an entity builder to construct instances `AssetTransfer`.
   * @returns A builder that constructs instances of entity type `AssetTransfer`.
   */
  static builder(): EntityBuilderType<AssetTransfer, AssetTransferTypeForceMandatory> {
    return Entity.entityBuilder(AssetTransfer);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AssetTransfer` entity type.
   * @returns A `AssetTransfer` request builder.
   */
  static requestBuilder(): AssetTransferRequestBuilder {
    return new AssetTransferRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetTransfer`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AssetTransfer`.
   */
  static customField(fieldName: string): CustomField<AssetTransfer> {
    return Entity.customFieldSelector(fieldName, AssetTransfer);
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

export interface AssetTransferType {
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

export interface AssetTransferTypeForceMandatory {
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

export namespace AssetTransfer {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<AssetTransfer> = new NumberField('DocEntry', AssetTransfer, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<AssetTransfer> = new NumberField('DocNum', AssetTransfer, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<AssetTransfer> = new NumberField('Series', AssetTransfer, 'Edm.Int32');
  /**
   * Static representation of the [[postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_DATE: DateField<AssetTransfer> = new DateField('PostingDate', AssetTransfer, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DATE: DateField<AssetTransfer> = new DateField('DocumentDate', AssetTransfer, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<AssetTransfer> = new StringField('Remarks', AssetTransfer, 'Edm.String');
  /**
   * Static representation of the [[reference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE: StringField<AssetTransfer> = new StringField('Reference', AssetTransfer, 'Edm.String');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<AssetTransfer> = new StringField('Currency', AssetTransfer, 'Edm.String');
  /**
   * Static representation of the [[documentRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_RATE: NumberField<AssetTransfer> = new NumberField('DocumentRate', AssetTransfer, 'Edm.Double');
  /**
   * Static representation of the [[documentTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL: NumberField<AssetTransfer> = new NumberField('DocumentTotal', AssetTransfer, 'Edm.Double');
  /**
   * Static representation of the [[documentTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL_FC: NumberField<AssetTransfer> = new NumberField('DocumentTotalFC', AssetTransfer, 'Edm.Double');
  /**
   * Static representation of the [[documentTotalSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL_SC: NumberField<AssetTransfer> = new NumberField('DocumentTotalSC', AssetTransfer, 'Edm.Double');
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<AssetTransfer> = new DateField('AssetValueDate', AssetTransfer, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[manualDepreciationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_DEPRECIATION_TYPE: StringField<AssetTransfer> = new StringField('ManualDepreciationType', AssetTransfer, 'Edm.String');
  /**
   * Static representation of the [[cancellationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLATION_DATE: DateField<AssetTransfer> = new DateField('CancellationDate', AssetTransfer, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[depreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREA: StringField<AssetTransfer> = new StringField('DepreciationArea', AssetTransfer, 'Edm.String');
  /**
   * Static representation of the [[bplId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID: NumberField<AssetTransfer> = new NumberField('BPLId', AssetTransfer, 'Edm.Int32');
  /**
   * Static representation of the [[origin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGIN: NumberField<AssetTransfer> = new NumberField('Origin', AssetTransfer, 'Edm.Int32');
  /**
   * Static representation of the [[baseReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_REFERENCE: StringField<AssetTransfer> = new StringField('BaseReference', AssetTransfer, 'Edm.String');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<AssetTransfer> = new StringField('BPLName', AssetTransfer, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<AssetTransfer> = new StringField('VATRegNum', AssetTransfer, 'Edm.String');
  /**
   * Static representation of the [[assetDocumentLineCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DOCUMENT_LINE_COLLECTION: CollectionField<AssetTransfer> = new CollectionField('AssetDocumentLineCollection', AssetTransfer, new AssetDocumentLineField('', AssetTransfer));
  /**
   * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION: CollectionField<AssetTransfer> = new CollectionField('AssetDocumentAreaJournalCollection', AssetTransfer, new AssetDocumentAreaJournalField('', AssetTransfer));
  /**
   * Static representation of the one-to-one navigation property [[currency2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_2: OneToOneLink<AssetTransfer, Currencies> = new OneToOneLink('Currency2', AssetTransfer, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[depreciationType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_TYPE: OneToOneLink<AssetTransfer, DepreciationTypes> = new OneToOneLink('DepreciationType', AssetTransfer, DepreciationTypes);
  /**
   * Static representation of the one-to-one navigation property [[depreciationArea2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREA_2: OneToOneLink<AssetTransfer, DepreciationAreas> = new OneToOneLink('DepreciationArea2', AssetTransfer, DepreciationAreas);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<AssetTransfer, BusinessPlaces> = new OneToOneLink('BusinessPlace', AssetTransfer, BusinessPlaces);
  /**
   * All fields of the AssetTransfer entity.
   */
  export const _allFields: Array<NumberField<AssetTransfer> | DateField<AssetTransfer> | StringField<AssetTransfer> | CollectionField<AssetTransfer> | OneToOneLink<AssetTransfer, Currencies> | OneToOneLink<AssetTransfer, DepreciationTypes> | OneToOneLink<AssetTransfer, DepreciationAreas> | OneToOneLink<AssetTransfer, BusinessPlaces>> = [
    AssetTransfer.DOC_ENTRY,
    AssetTransfer.DOC_NUM,
    AssetTransfer.SERIES,
    AssetTransfer.POSTING_DATE,
    AssetTransfer.DOCUMENT_DATE,
    AssetTransfer.REMARKS,
    AssetTransfer.REFERENCE,
    AssetTransfer.CURRENCY,
    AssetTransfer.DOCUMENT_RATE,
    AssetTransfer.DOCUMENT_TOTAL,
    AssetTransfer.DOCUMENT_TOTAL_FC,
    AssetTransfer.DOCUMENT_TOTAL_SC,
    AssetTransfer.ASSET_VALUE_DATE,
    AssetTransfer.MANUAL_DEPRECIATION_TYPE,
    AssetTransfer.CANCELLATION_DATE,
    AssetTransfer.DEPRECIATION_AREA,
    AssetTransfer.BPL_ID,
    AssetTransfer.ORIGIN,
    AssetTransfer.BASE_REFERENCE,
    AssetTransfer.BPL_NAME,
    AssetTransfer.VAT_REG_NUM,
    AssetTransfer.ASSET_DOCUMENT_LINE_COLLECTION,
    AssetTransfer.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION,
    AssetTransfer.CURRENCY_2,
    AssetTransfer.DEPRECIATION_TYPE,
    AssetTransfer.DEPRECIATION_AREA_2,
    AssetTransfer.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AssetTransfer> = new AllFields('*', AssetTransfer);
  /**
   * All key fields of the AssetTransfer entity.
   */
  export const _keyFields: Array<Field<AssetTransfer>> = [AssetTransfer.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property AssetTransfer.
   */
  export const _keys: { [keys: string]: Field<AssetTransfer> } = AssetTransfer._keyFields.reduce((acc: { [keys: string]: Field<AssetTransfer> }, field: Field<AssetTransfer>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
