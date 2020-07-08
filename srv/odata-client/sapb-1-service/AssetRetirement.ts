/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetRetirementRequestBuilder } from './AssetRetirementRequestBuilder';
import { Moment } from 'moment';
import { AssetDocumentLine, AssetDocumentLineField } from './AssetDocumentLine';
import { AssetDocumentAreaJournal, AssetDocumentAreaJournalField } from './AssetDocumentAreaJournal';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "AssetRetirement" of service "SAPB1".
 */
export class AssetRetirement extends Entity implements AssetRetirementType {
  /**
   * Technical entity name for AssetRetirement.
   */
  static _entityName = 'AssetRetirement';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AssetRetirement.
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
   * Returns an entity builder to construct instances `AssetRetirement`.
   * @returns A builder that constructs instances of entity type `AssetRetirement`.
   */
  static builder(): EntityBuilderType<AssetRetirement, AssetRetirementTypeForceMandatory> {
    return Entity.entityBuilder(AssetRetirement);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AssetRetirement` entity type.
   * @returns A `AssetRetirement` request builder.
   */
  static requestBuilder(): AssetRetirementRequestBuilder {
    return new AssetRetirementRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetRetirement`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AssetRetirement`.
   */
  static customField(fieldName: string): CustomField<AssetRetirement> {
    return Entity.customFieldSelector(fieldName, AssetRetirement);
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

export interface AssetRetirementType {
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

export interface AssetRetirementTypeForceMandatory {
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

export namespace AssetRetirement {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<AssetRetirement> = new NumberField('DocEntry', AssetRetirement, 'Edm.Int32');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<AssetRetirement> = new NumberField('DocNum', AssetRetirement, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<AssetRetirement> = new NumberField('Series', AssetRetirement, 'Edm.Int32');
  /**
   * Static representation of the [[postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_DATE: DateField<AssetRetirement> = new DateField('PostingDate', AssetRetirement, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DATE: DateField<AssetRetirement> = new DateField('DocumentDate', AssetRetirement, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<AssetRetirement> = new StringField('Remarks', AssetRetirement, 'Edm.String');
  /**
   * Static representation of the [[reference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE: StringField<AssetRetirement> = new StringField('Reference', AssetRetirement, 'Edm.String');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<AssetRetirement> = new StringField('Currency', AssetRetirement, 'Edm.String');
  /**
   * Static representation of the [[documentRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_RATE: NumberField<AssetRetirement> = new NumberField('DocumentRate', AssetRetirement, 'Edm.Double');
  /**
   * Static representation of the [[documentTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL: NumberField<AssetRetirement> = new NumberField('DocumentTotal', AssetRetirement, 'Edm.Double');
  /**
   * Static representation of the [[documentTotalFc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL_FC: NumberField<AssetRetirement> = new NumberField('DocumentTotalFC', AssetRetirement, 'Edm.Double');
  /**
   * Static representation of the [[documentTotalSc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TOTAL_SC: NumberField<AssetRetirement> = new NumberField('DocumentTotalSC', AssetRetirement, 'Edm.Double');
  /**
   * Static representation of the [[assetValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_VALUE_DATE: DateField<AssetRetirement> = new DateField('AssetValueDate', AssetRetirement, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[manualDepreciationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_DEPRECIATION_TYPE: StringField<AssetRetirement> = new StringField('ManualDepreciationType', AssetRetirement, 'Edm.String');
  /**
   * Static representation of the [[cancellationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLATION_DATE: DateField<AssetRetirement> = new DateField('CancellationDate', AssetRetirement, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[depreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREA: StringField<AssetRetirement> = new StringField('DepreciationArea', AssetRetirement, 'Edm.String');
  /**
   * Static representation of the [[bplId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_ID: NumberField<AssetRetirement> = new NumberField('BPLId', AssetRetirement, 'Edm.Int32');
  /**
   * Static representation of the [[origin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGIN: NumberField<AssetRetirement> = new NumberField('Origin', AssetRetirement, 'Edm.Int32');
  /**
   * Static representation of the [[baseReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_REFERENCE: StringField<AssetRetirement> = new StringField('BaseReference', AssetRetirement, 'Edm.String');
  /**
   * Static representation of the [[bplName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPL_NAME: StringField<AssetRetirement> = new StringField('BPLName', AssetRetirement, 'Edm.String');
  /**
   * Static representation of the [[vatRegNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REG_NUM: StringField<AssetRetirement> = new StringField('VATRegNum', AssetRetirement, 'Edm.String');
  /**
   * Static representation of the [[assetDocumentLineCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DOCUMENT_LINE_COLLECTION: CollectionField<AssetRetirement> = new CollectionField('AssetDocumentLineCollection', AssetRetirement, new AssetDocumentLineField('', AssetRetirement));
  /**
   * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION: CollectionField<AssetRetirement> = new CollectionField('AssetDocumentAreaJournalCollection', AssetRetirement, new AssetDocumentAreaJournalField('', AssetRetirement));
  /**
   * Static representation of the one-to-one navigation property [[currency2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_2: OneToOneLink<AssetRetirement, Currencies> = new OneToOneLink('Currency2', AssetRetirement, Currencies);
  /**
   * Static representation of the one-to-one navigation property [[depreciationType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_TYPE: OneToOneLink<AssetRetirement, DepreciationTypes> = new OneToOneLink('DepreciationType', AssetRetirement, DepreciationTypes);
  /**
   * Static representation of the one-to-one navigation property [[depreciationArea2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREA_2: OneToOneLink<AssetRetirement, DepreciationAreas> = new OneToOneLink('DepreciationArea2', AssetRetirement, DepreciationAreas);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<AssetRetirement, BusinessPlaces> = new OneToOneLink('BusinessPlace', AssetRetirement, BusinessPlaces);
  /**
   * All fields of the AssetRetirement entity.
   */
  export const _allFields: Array<NumberField<AssetRetirement> | DateField<AssetRetirement> | StringField<AssetRetirement> | CollectionField<AssetRetirement> | OneToOneLink<AssetRetirement, Currencies> | OneToOneLink<AssetRetirement, DepreciationTypes> | OneToOneLink<AssetRetirement, DepreciationAreas> | OneToOneLink<AssetRetirement, BusinessPlaces>> = [
    AssetRetirement.DOC_ENTRY,
    AssetRetirement.DOC_NUM,
    AssetRetirement.SERIES,
    AssetRetirement.POSTING_DATE,
    AssetRetirement.DOCUMENT_DATE,
    AssetRetirement.REMARKS,
    AssetRetirement.REFERENCE,
    AssetRetirement.CURRENCY,
    AssetRetirement.DOCUMENT_RATE,
    AssetRetirement.DOCUMENT_TOTAL,
    AssetRetirement.DOCUMENT_TOTAL_FC,
    AssetRetirement.DOCUMENT_TOTAL_SC,
    AssetRetirement.ASSET_VALUE_DATE,
    AssetRetirement.MANUAL_DEPRECIATION_TYPE,
    AssetRetirement.CANCELLATION_DATE,
    AssetRetirement.DEPRECIATION_AREA,
    AssetRetirement.BPL_ID,
    AssetRetirement.ORIGIN,
    AssetRetirement.BASE_REFERENCE,
    AssetRetirement.BPL_NAME,
    AssetRetirement.VAT_REG_NUM,
    AssetRetirement.ASSET_DOCUMENT_LINE_COLLECTION,
    AssetRetirement.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION,
    AssetRetirement.CURRENCY_2,
    AssetRetirement.DEPRECIATION_TYPE,
    AssetRetirement.DEPRECIATION_AREA_2,
    AssetRetirement.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AssetRetirement> = new AllFields('*', AssetRetirement);
  /**
   * All key fields of the AssetRetirement entity.
   */
  export const _keyFields: Array<Field<AssetRetirement>> = [AssetRetirement.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property AssetRetirement.
   */
  export const _keys: { [keys: string]: Field<AssetRetirement> } = AssetRetirement._keyFields.reduce((acc: { [keys: string]: Field<AssetRetirement> }, field: Field<AssetRetirement>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
