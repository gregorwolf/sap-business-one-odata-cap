/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DepreciationAreasRequestBuilder } from './DepreciationAreasRequestBuilder';
import { PostingOfDepreciationEnum } from './PostingOfDepreciationEnum';
import { RetirementMethodEnum } from './RetirementMethodEnum';
import { AreaTypeEnum } from './AreaTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DepreciationAreas" of service "SAPB1".
 */
export class DepreciationAreas extends EntityV4 implements DepreciationAreasType {
  /**
   * Technical entity name for DepreciationAreas.
   */
  static _entityName = 'DepreciationAreas';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Posting Of Depreciation.
   * @nullable
   */
  postingOfDepreciation?: PostingOfDepreciationEnum;
  /**
   * Retirement Method.
   * @nullable
   */
  retirementMethod?: RetirementMethodEnum;
  /**
   * Area Type.
   * @nullable
   */
  areaType?: AreaTypeEnum;
  /**
   * Derived Area.
   * @nullable
   */
  derivedArea?: string;
  /**
   * Main Booking Area.
   * @nullable
   */
  mainBookingArea?: BoYesNoEnum;
  /**
   * Direct Revenue Posting.
   * @nullable
   */
  directRevenuePosting?: BoYesNoEnum;
  /**
   * Tax Credit Control.
   * @nullable
   */
  taxCreditControl?: BoYesNoEnum;
  /**
   * Tax Type.
   * @nullable
   */
  taxType?: number;
  /**
   * Bp For Tax Correction.
   * @nullable
   */
  bpForTaxCorrection?: string;
  /**
   * Item For Tax Correction.
   * @nullable
   */
  itemForTaxCorrection?: string;
  /**
   * Usage For Tax Correction.
   * @nullable
   */
  usageForTaxCorrection?: number;
  /**
   * One-to-many navigation property to the [[AssetTransfer]] entity.
   */
  assetTransfer!: AssetTransfer[];
  /**
   * One-to-many navigation property to the [[AssetRetirement]] entity.
   */
  assetRetirement!: AssetRetirement[];
  /**
   * One-to-many navigation property to the [[AssetCapitalizationCreditMemo]] entity.
   */
  assetCapitalizationCreditMemo!: AssetCapitalizationCreditMemo[];
  /**
   * One-to-one navigation property to the [[SalesTaxAuthoritiesTypes]] entity.
   */
  salesTaxAuthoritiesType!: SalesTaxAuthoritiesTypes;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;
  /**
   * One-to-many navigation property to the [[AssetCapitalization]] entity.
   */
  assetCapitalization!: AssetCapitalization[];
  /**
   * One-to-many navigation property to the [[AssetManualDepreciation]] entity.
   */
  assetManualDepreciation!: AssetManualDepreciation[];

  /**
   * Returns an entity builder to construct instances of `DepreciationAreas`.
   * @returns A builder that constructs instances of entity type `DepreciationAreas`.
   */
  static builder(): EntityBuilderType<DepreciationAreas, DepreciationAreasType> {
    return EntityV4.entityBuilder(DepreciationAreas);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DepreciationAreas` entity type.
   * @returns A `DepreciationAreas` request builder.
   */
  static requestBuilder(): DepreciationAreasRequestBuilder {
    return new DepreciationAreasRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DepreciationAreas`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DepreciationAreas`.
   */
  static customField(fieldName: string): CustomFieldV4<DepreciationAreas> {
    return EntityV4.customFieldSelector(fieldName, DepreciationAreas);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { AssetTransfer, AssetTransferType } from './AssetTransfer';
import { AssetRetirement, AssetRetirementType } from './AssetRetirement';
import { AssetCapitalizationCreditMemo, AssetCapitalizationCreditMemoType } from './AssetCapitalizationCreditMemo';
import { SalesTaxAuthoritiesTypes, SalesTaxAuthoritiesTypesType } from './SalesTaxAuthoritiesTypes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Items, ItemsType } from './Items';
import { AssetCapitalization, AssetCapitalizationType } from './AssetCapitalization';
import { AssetManualDepreciation, AssetManualDepreciationType } from './AssetManualDepreciation';

export interface DepreciationAreasType {
  code?: string | null;
  description?: string | null;
  postingOfDepreciation?: PostingOfDepreciationEnum | null;
  retirementMethod?: RetirementMethodEnum | null;
  areaType?: AreaTypeEnum | null;
  derivedArea?: string | null;
  mainBookingArea?: BoYesNoEnum | null;
  directRevenuePosting?: BoYesNoEnum | null;
  taxCreditControl?: BoYesNoEnum | null;
  taxType?: number | null;
  bpForTaxCorrection?: string | null;
  itemForTaxCorrection?: string | null;
  usageForTaxCorrection?: number | null;
  assetTransfer: AssetTransferType[];
  assetRetirement: AssetRetirementType[];
  assetCapitalizationCreditMemo: AssetCapitalizationCreditMemoType[];
  salesTaxAuthoritiesType: SalesTaxAuthoritiesTypesType;
  businessPartner: BusinessPartnersType;
  item: ItemsType;
  assetCapitalization: AssetCapitalizationType[];
  assetManualDepreciation: AssetManualDepreciationType[];
}

export namespace DepreciationAreas {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<DepreciationAreas> = new StringField('Code', DepreciationAreas, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<DepreciationAreas> = new StringField('Description', DepreciationAreas, 'Edm.String');
  /**
   * Static representation of the [[postingOfDepreciation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_OF_DEPRECIATION: EnumField<DepreciationAreas> = new EnumField('PostingOfDepreciation', DepreciationAreas);
  /**
   * Static representation of the [[retirementMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETIREMENT_METHOD: EnumField<DepreciationAreas> = new EnumField('RetirementMethod', DepreciationAreas);
  /**
   * Static representation of the [[areaType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AREA_TYPE: EnumField<DepreciationAreas> = new EnumField('AreaType', DepreciationAreas);
  /**
   * Static representation of the [[derivedArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DERIVED_AREA: StringField<DepreciationAreas> = new StringField('DerivedArea', DepreciationAreas, 'Edm.String');
  /**
   * Static representation of the [[mainBookingArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_BOOKING_AREA: EnumField<DepreciationAreas> = new EnumField('MainBookingArea', DepreciationAreas);
  /**
   * Static representation of the [[directRevenuePosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIRECT_REVENUE_POSTING: EnumField<DepreciationAreas> = new EnumField('DirectRevenuePosting', DepreciationAreas);
  /**
   * Static representation of the [[taxCreditControl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_CREDIT_CONTROL: EnumField<DepreciationAreas> = new EnumField('TaxCreditControl', DepreciationAreas);
  /**
   * Static representation of the [[taxType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_TYPE: NumberField<DepreciationAreas> = new NumberField('TaxType', DepreciationAreas, 'Edm.Int32');
  /**
   * Static representation of the [[bpForTaxCorrection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FOR_TAX_CORRECTION: StringField<DepreciationAreas> = new StringField('BPForTaxCorrection', DepreciationAreas, 'Edm.String');
  /**
   * Static representation of the [[itemForTaxCorrection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_FOR_TAX_CORRECTION: StringField<DepreciationAreas> = new StringField('ItemForTaxCorrection', DepreciationAreas, 'Edm.String');
  /**
   * Static representation of the [[usageForTaxCorrection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USAGE_FOR_TAX_CORRECTION: NumberField<DepreciationAreas> = new NumberField('UsageForTaxCorrection', DepreciationAreas, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[assetTransfer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_TRANSFER: OneToManyLink<DepreciationAreas, AssetTransfer> = new OneToManyLink('AssetTransfer', DepreciationAreas, AssetTransfer);
  /**
   * Static representation of the one-to-many navigation property [[assetRetirement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_RETIREMENT: OneToManyLink<DepreciationAreas, AssetRetirement> = new OneToManyLink('AssetRetirement', DepreciationAreas, AssetRetirement);
  /**
   * Static representation of the one-to-many navigation property [[assetCapitalizationCreditMemo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CAPITALIZATION_CREDIT_MEMO: OneToManyLink<DepreciationAreas, AssetCapitalizationCreditMemo> = new OneToManyLink('AssetCapitalizationCreditMemo', DepreciationAreas, AssetCapitalizationCreditMemo);
  /**
   * Static representation of the one-to-one navigation property [[salesTaxAuthoritiesType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_TAX_AUTHORITIES_TYPE: OneToOneLink<DepreciationAreas, SalesTaxAuthoritiesTypes> = new OneToOneLink('SalesTaxAuthoritiesType', DepreciationAreas, SalesTaxAuthoritiesTypes);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<DepreciationAreas, BusinessPartners> = new OneToOneLink('BusinessPartner', DepreciationAreas, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<DepreciationAreas, Items> = new OneToOneLink('Item', DepreciationAreas, Items);
  /**
   * Static representation of the one-to-many navigation property [[assetCapitalization]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CAPITALIZATION: OneToManyLink<DepreciationAreas, AssetCapitalization> = new OneToManyLink('AssetCapitalization', DepreciationAreas, AssetCapitalization);
  /**
   * Static representation of the one-to-many navigation property [[assetManualDepreciation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_MANUAL_DEPRECIATION: OneToManyLink<DepreciationAreas, AssetManualDepreciation> = new OneToManyLink('AssetManualDepreciation', DepreciationAreas, AssetManualDepreciation);
  /**
   * All fields of the DepreciationAreas entity.
   */
  export const _allFields: Array<StringField<DepreciationAreas> | EnumField<DepreciationAreas> | NumberField<DepreciationAreas> | OneToManyLink<DepreciationAreas, AssetTransfer> | OneToManyLink<DepreciationAreas, AssetRetirement> | OneToManyLink<DepreciationAreas, AssetCapitalizationCreditMemo> | OneToOneLink<DepreciationAreas, SalesTaxAuthoritiesTypes> | OneToOneLink<DepreciationAreas, BusinessPartners> | OneToOneLink<DepreciationAreas, Items> | OneToManyLink<DepreciationAreas, AssetCapitalization> | OneToManyLink<DepreciationAreas, AssetManualDepreciation>> = [
    DepreciationAreas.CODE,
    DepreciationAreas.DESCRIPTION,
    DepreciationAreas.POSTING_OF_DEPRECIATION,
    DepreciationAreas.RETIREMENT_METHOD,
    DepreciationAreas.AREA_TYPE,
    DepreciationAreas.DERIVED_AREA,
    DepreciationAreas.MAIN_BOOKING_AREA,
    DepreciationAreas.DIRECT_REVENUE_POSTING,
    DepreciationAreas.TAX_CREDIT_CONTROL,
    DepreciationAreas.TAX_TYPE,
    DepreciationAreas.BP_FOR_TAX_CORRECTION,
    DepreciationAreas.ITEM_FOR_TAX_CORRECTION,
    DepreciationAreas.USAGE_FOR_TAX_CORRECTION,
    DepreciationAreas.ASSET_TRANSFER,
    DepreciationAreas.ASSET_RETIREMENT,
    DepreciationAreas.ASSET_CAPITALIZATION_CREDIT_MEMO,
    DepreciationAreas.SALES_TAX_AUTHORITIES_TYPE,
    DepreciationAreas.BUSINESS_PARTNER,
    DepreciationAreas.ITEM,
    DepreciationAreas.ASSET_CAPITALIZATION,
    DepreciationAreas.ASSET_MANUAL_DEPRECIATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DepreciationAreas> = new AllFields('*', DepreciationAreas);
  /**
   * All key fields of the DepreciationAreas entity.
   */
  export const _keyFields: Array<Field<DepreciationAreas>> = [DepreciationAreas.CODE];
  /**
   * Mapping of all key field names to the respective static field property DepreciationAreas.
   */
  export const _keys: { [keys: string]: Field<DepreciationAreas> } = DepreciationAreas._keyFields.reduce((acc: { [keys: string]: Field<DepreciationAreas> }, field: Field<DepreciationAreas>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
