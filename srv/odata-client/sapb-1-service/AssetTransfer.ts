/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetTransferRequestBuilder } from './AssetTransferRequestBuilder';
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
 * This class represents the entity "AssetTransfer" of service "SAPB1".
 */
export class AssetTransfer extends EntityV4 implements AssetTransferType {
  /**
   * Technical entity name for AssetTransfer.
   */
  static _entityName = 'AssetTransfer';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Returns an entity builder to construct instances of `AssetTransfer`.
   * @returns A builder that constructs instances of entity type `AssetTransfer`.
   */
  static builder(): EntityBuilderType<AssetTransfer, AssetTransferType> {
    return EntityV4.entityBuilder(AssetTransfer);
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
  static customField(fieldName: string): CustomFieldV4<AssetTransfer> {
    return EntityV4.customFieldSelector(fieldName, AssetTransfer);
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
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: EnumField<AssetTransfer> = new EnumField('Status', AssetTransfer);
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
   * Static representation of the [[documentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TYPE: EnumField<AssetTransfer> = new EnumField('DocumentType', AssetTransfer);
  /**
   * Static representation of the [[summerizeByProjects]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUMMERIZE_BY_PROJECTS: EnumField<AssetTransfer> = new EnumField('SummerizeByProjects', AssetTransfer);
  /**
   * Static representation of the [[summerizeByDistributionRules]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUMMERIZE_BY_DISTRIBUTION_RULES: EnumField<AssetTransfer> = new EnumField('SummerizeByDistributionRules', AssetTransfer);
  /**
   * Static representation of the [[manualDepreciationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_DEPRECIATION_TYPE: StringField<AssetTransfer> = new StringField('ManualDepreciationType', AssetTransfer, 'Edm.String');
  /**
   * Static representation of the [[handWritten]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAND_WRITTEN: EnumField<AssetTransfer> = new EnumField('HandWritten', AssetTransfer);
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
   * Static representation of the [[lowValueAssetRetirement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOW_VALUE_ASSET_RETIREMENT: EnumField<AssetTransfer> = new EnumField('LowValueAssetRetirement', AssetTransfer);
  /**
   * Static representation of the [[cancellationOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELLATION_OPTION: EnumField<AssetTransfer> = new EnumField('CancellationOption', AssetTransfer);
  /**
   * Static representation of the [[originalType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINAL_TYPE: EnumField<AssetTransfer> = new EnumField('OriginalType', AssetTransfer);
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
  export const ASSET_DOCUMENT_LINE_COLLECTION: CollectionField<AssetTransfer, AssetDocumentLine> = new CollectionField('AssetDocumentLineCollection', AssetTransfer, AssetDocumentLine);
  /**
   * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION: CollectionField<AssetTransfer, AssetDocumentAreaJournal> = new CollectionField('AssetDocumentAreaJournalCollection', AssetTransfer, AssetDocumentAreaJournal);
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
  export const _allFields: Array<NumberField<AssetTransfer> | DateField<AssetTransfer> | EnumField<AssetTransfer> | StringField<AssetTransfer> | CollectionField<AssetTransfer, AssetDocumentLine> | CollectionField<AssetTransfer, AssetDocumentAreaJournal> | OneToOneLink<AssetTransfer, Currencies> | OneToOneLink<AssetTransfer, DepreciationTypes> | OneToOneLink<AssetTransfer, DepreciationAreas> | OneToOneLink<AssetTransfer, BusinessPlaces>> = [
    AssetTransfer.DOC_ENTRY,
    AssetTransfer.DOC_NUM,
    AssetTransfer.SERIES,
    AssetTransfer.POSTING_DATE,
    AssetTransfer.DOCUMENT_DATE,
    AssetTransfer.STATUS,
    AssetTransfer.REMARKS,
    AssetTransfer.REFERENCE,
    AssetTransfer.CURRENCY,
    AssetTransfer.DOCUMENT_RATE,
    AssetTransfer.DOCUMENT_TOTAL,
    AssetTransfer.DOCUMENT_TOTAL_FC,
    AssetTransfer.DOCUMENT_TOTAL_SC,
    AssetTransfer.ASSET_VALUE_DATE,
    AssetTransfer.DOCUMENT_TYPE,
    AssetTransfer.SUMMERIZE_BY_PROJECTS,
    AssetTransfer.SUMMERIZE_BY_DISTRIBUTION_RULES,
    AssetTransfer.MANUAL_DEPRECIATION_TYPE,
    AssetTransfer.HAND_WRITTEN,
    AssetTransfer.CANCELLATION_DATE,
    AssetTransfer.DEPRECIATION_AREA,
    AssetTransfer.BPL_ID,
    AssetTransfer.ORIGIN,
    AssetTransfer.LOW_VALUE_ASSET_RETIREMENT,
    AssetTransfer.CANCELLATION_OPTION,
    AssetTransfer.ORIGINAL_TYPE,
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
