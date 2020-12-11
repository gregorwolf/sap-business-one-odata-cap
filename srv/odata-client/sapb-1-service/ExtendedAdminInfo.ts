/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ExtendedAdminInfo
 */
export interface ExtendedAdminInfo {
  /**
   * Address Type.
   * @nullable
   */
  addressType?: string;
  /**
   * Street No.
   * @nullable
   */
  streetNo?: string;
  /**
   * Std Code.
   * @nullable
   */
  stdCode?: number;
  /**
   * Std Code Foreign.
   * @nullable
   */
  stdCodeForeign?: number;
  /**
   * Nature Of Company Code.
   * @nullable
   */
  natureOfCompanyCode?: number;
  /**
   * Economic Activity Type Code.
   * @nullable
   */
  economicActivityTypeCode?: number;
  /**
   * Credit Contribution Origin Code.
   * @nullable
   */
  creditContributionOriginCode?: string;
  /**
   * Ipi Period Code.
   * @nullable
   */
  ipiPeriodCode?: string;
  /**
   * Cooperative Association Type Code.
   * @nullable
   */
  cooperativeAssociationTypeCode?: number;
  /**
   * Profit Taxation Code.
   * @nullable
   */
  profitTaxationCode?: number;
  /**
   * Company Qualification Code.
   * @nullable
   */
  companyQualificationCode?: number;
  /**
   * Declarer Type Code.
   * @nullable
   */
  declarerTypeCode?: number;
  /**
   * Ipi Tax Contributor.
   * @nullable
   */
  ipiTaxContributor?: BoYesNoEnum;
  /**
   * Commercial Register.
   * @nullable
   */
  commercialRegister?: string;
  /**
   * Date Of Incorporation.
   * @nullable
   */
  dateOfIncorporation?: Moment;
  /**
   * Sped Profile.
   * @nullable
   */
  spedProfile?: string;
  /**
   * Environment Type.
   * @nullable
   */
  environmentType?: number;
  /**
   * Opting 4 Icms.
   * @nullable
   */
  opting4Icms?: BoYesNoEnum;
  /**
   * Okdp Number.
   * @nullable
   */
  okdpNumber?: string;
  /**
   * Global Location Number.
   * @nullable
   */
  globalLocationNumber?: string;
  /**
   * Enable Intrastat.
   * @nullable
   */
  enableIntrastat?: BoYesNoEnum;
  /**
   * Authority User.
   * @nullable
   */
  authorityUser?: string;
  /**
   * Authority Password.
   * @nullable
   */
  authorityPassword?: string;
  /**
   * Ur Lfor Goods Transport Service.
   * @nullable
   */
  urLforGoodsTransportService?: string;
  /**
   * Ur Lfor Invoice Type Service.
   * @nullable
   */
  urLforInvoiceTypeService?: string;
  /**
   * Electronic Approval For Goods Trans Enabled.
   * @nullable
   */
  electronicApprovalForGoodsTransEnabled?: BoYesNoEnum;
  /**
   * Electronic Approval For Invoice Enabled.
   * @nullable
   */
  electronicApprovalForInvoiceEnabled?: BoYesNoEnum;
  /**
   * Allow Inactive Items In Inventory Opening Balance.
   * @nullable
   */
  allowInactiveItemsInInventoryOpeningBalance?: BoYesNoEnum;
  /**
   * Allow Inactive Items In Inventory Counting And Posting.
   * @nullable
   */
  allowInactiveItemsInInventoryCountingAndPosting?: BoYesNoEnum;
  /**
   * Auto Assign New Branch To Bp.
   * @nullable
   */
  autoAssignNewBranchToBp?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[ExtendedAdminInfo.build]] instead.
 */
export function createExtendedAdminInfo(json: any): ExtendedAdminInfo {
  return ExtendedAdminInfo.build(json);
}

/**
 * ExtendedAdminInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExtendedAdminInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExtendedAdminInfo> {
  /**
   * Representation of the [[ExtendedAdminInfo.addressType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddressType', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedAdminInfo.streetNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  streetNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StreetNo', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedAdminInfo.stdCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stdCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('STDCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedAdminInfo.stdCodeForeign]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stdCodeForeign: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('STDCodeForeign', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedAdminInfo.natureOfCompanyCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  natureOfCompanyCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NatureOfCompanyCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedAdminInfo.economicActivityTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  economicActivityTypeCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EconomicActivityTypeCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedAdminInfo.creditContributionOriginCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditContributionOriginCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CreditContributionOriginCode', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedAdminInfo.ipiPeriodCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ipiPeriodCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('IPIPeriodCode', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedAdminInfo.cooperativeAssociationTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cooperativeAssociationTypeCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CooperativeAssociationTypeCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedAdminInfo.profitTaxationCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitTaxationCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ProfitTaxationCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedAdminInfo.companyQualificationCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  companyQualificationCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CompanyQualificationCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedAdminInfo.declarerTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  declarerTypeCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DeclarerTypeCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedAdminInfo.ipiTaxContributor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ipiTaxContributor: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IPITaxContributor', this);
  /**
   * Representation of the [[ExtendedAdminInfo.commercialRegister]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commercialRegister: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CommercialRegister', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedAdminInfo.dateOfIncorporation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateOfIncorporation: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateOfIncorporation', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ExtendedAdminInfo.spedProfile]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  spedProfile: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SPEDProfile', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedAdminInfo.environmentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  environmentType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EnvironmentType', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedAdminInfo.opting4Icms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  opting4Icms: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Opting4ICMS', this);
  /**
   * Representation of the [[ExtendedAdminInfo.okdpNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  okdpNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OKDPNumber', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedAdminInfo.globalLocationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  globalLocationNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GlobalLocationNumber', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedAdminInfo.enableIntrastat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableIntrastat: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('EnableIntrastat', this);
  /**
   * Representation of the [[ExtendedAdminInfo.authorityUser]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authorityUser: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AuthorityUser', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedAdminInfo.authorityPassword]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authorityPassword: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AuthorityPassword', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedAdminInfo.urLforGoodsTransportService]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  urLforGoodsTransportService: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('URLforGoodsTransportService', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedAdminInfo.urLforInvoiceTypeService]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  urLforInvoiceTypeService: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('URLforInvoiceTypeService', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedAdminInfo.electronicApprovalForGoodsTransEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  electronicApprovalForGoodsTransEnabled: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ElectronicApprovalForGoodsTransEnabled', this);
  /**
   * Representation of the [[ExtendedAdminInfo.electronicApprovalForInvoiceEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  electronicApprovalForInvoiceEnabled: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ElectronicApprovalForInvoiceEnabled', this);
  /**
   * Representation of the [[ExtendedAdminInfo.allowInactiveItemsInInventoryOpeningBalance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowInactiveItemsInInventoryOpeningBalance: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AllowInactiveItemsInInventoryOpeningBalance', this);
  /**
   * Representation of the [[ExtendedAdminInfo.allowInactiveItemsInInventoryCountingAndPosting]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowInactiveItemsInInventoryCountingAndPosting: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AllowInactiveItemsInInventoryCountingAndPosting', this);
  /**
   * Representation of the [[ExtendedAdminInfo.autoAssignNewBranchToBp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autoAssignNewBranchToBp: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AutoAssignNewBranchToBP', this);

  /**
   * Creates an instance of ExtendedAdminInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ExtendedAdminInfo);
  }
}

export namespace ExtendedAdminInfo {
  /**
   * Metadata information on all properties of the `ExtendedAdminInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExtendedAdminInfo>[] = [{
    originalName: 'AddressType',
    name: 'addressType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StreetNo',
    name: 'streetNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'STDCode',
    name: 'stdCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'STDCodeForeign',
    name: 'stdCodeForeign',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'NatureOfCompanyCode',
    name: 'natureOfCompanyCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EconomicActivityTypeCode',
    name: 'economicActivityTypeCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CreditContributionOriginCode',
    name: 'creditContributionOriginCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'IPIPeriodCode',
    name: 'ipiPeriodCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CooperativeAssociationTypeCode',
    name: 'cooperativeAssociationTypeCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ProfitTaxationCode',
    name: 'profitTaxationCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CompanyQualificationCode',
    name: 'companyQualificationCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DeclarerTypeCode',
    name: 'declarerTypeCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'IPITaxContributor',
    name: 'ipiTaxContributor',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CommercialRegister',
    name: 'commercialRegister',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DateOfIncorporation',
    name: 'dateOfIncorporation',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'SPEDProfile',
    name: 'spedProfile',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'EnvironmentType',
    name: 'environmentType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Opting4ICMS',
    name: 'opting4Icms',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'OKDPNumber',
    name: 'okdpNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GlobalLocationNumber',
    name: 'globalLocationNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'EnableIntrastat',
    name: 'enableIntrastat',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AuthorityUser',
    name: 'authorityUser',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AuthorityPassword',
    name: 'authorityPassword',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'URLforGoodsTransportService',
    name: 'urLforGoodsTransportService',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'URLforInvoiceTypeService',
    name: 'urLforInvoiceTypeService',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ElectronicApprovalForGoodsTransEnabled',
    name: 'electronicApprovalForGoodsTransEnabled',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ElectronicApprovalForInvoiceEnabled',
    name: 'electronicApprovalForInvoiceEnabled',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AllowInactiveItemsInInventoryOpeningBalance',
    name: 'allowInactiveItemsInInventoryOpeningBalance',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AllowInactiveItemsInInventoryCountingAndPosting',
    name: 'allowInactiveItemsInInventoryCountingAndPosting',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AutoAssignNewBranchToBP',
    name: 'autoAssignNewBranchToBp',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ExtendedAdminInfo {
    return deserializeComplexTypeV4(json, ExtendedAdminInfo);
  }
}
