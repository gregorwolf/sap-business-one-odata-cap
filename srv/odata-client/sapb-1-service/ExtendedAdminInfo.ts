/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ExtendedAdminInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ExtendedAdminInfo {
  export function build(json: { [keys: string]: FieldType }): ExtendedAdminInfo {
    return createComplexType(json, {
      AddressType: (addressType: string) => ({ addressType: edmToTs(addressType, 'Edm.String') }),
      StreetNo: (streetNo: string) => ({ streetNo: edmToTs(streetNo, 'Edm.String') }),
      STDCode: (stdCode: number) => ({ stdCode: edmToTs(stdCode, 'Edm.Int32') }),
      STDCodeForeign: (stdCodeForeign: number) => ({ stdCodeForeign: edmToTs(stdCodeForeign, 'Edm.Int32') }),
      NatureOfCompanyCode: (natureOfCompanyCode: number) => ({ natureOfCompanyCode: edmToTs(natureOfCompanyCode, 'Edm.Int32') }),
      EconomicActivityTypeCode: (economicActivityTypeCode: number) => ({ economicActivityTypeCode: edmToTs(economicActivityTypeCode, 'Edm.Int32') }),
      CreditContributionOriginCode: (creditContributionOriginCode: string) => ({ creditContributionOriginCode: edmToTs(creditContributionOriginCode, 'Edm.String') }),
      IPIPeriodCode: (ipiPeriodCode: string) => ({ ipiPeriodCode: edmToTs(ipiPeriodCode, 'Edm.String') }),
      CooperativeAssociationTypeCode: (cooperativeAssociationTypeCode: number) => ({ cooperativeAssociationTypeCode: edmToTs(cooperativeAssociationTypeCode, 'Edm.Int32') }),
      ProfitTaxationCode: (profitTaxationCode: number) => ({ profitTaxationCode: edmToTs(profitTaxationCode, 'Edm.Int32') }),
      CompanyQualificationCode: (companyQualificationCode: number) => ({ companyQualificationCode: edmToTs(companyQualificationCode, 'Edm.Int32') }),
      DeclarerTypeCode: (declarerTypeCode: number) => ({ declarerTypeCode: edmToTs(declarerTypeCode, 'Edm.Int32') }),
      CommercialRegister: (commercialRegister: string) => ({ commercialRegister: edmToTs(commercialRegister, 'Edm.String') }),
      DateOfIncorporation: (dateOfIncorporation: Moment) => ({ dateOfIncorporation: edmToTs(dateOfIncorporation, 'Edm.DateTimeOffset') }),
      SPEDProfile: (spedProfile: string) => ({ spedProfile: edmToTs(spedProfile, 'Edm.String') }),
      EnvironmentType: (environmentType: number) => ({ environmentType: edmToTs(environmentType, 'Edm.Int32') }),
      OKDPNumber: (okdpNumber: string) => ({ okdpNumber: edmToTs(okdpNumber, 'Edm.String') }),
      GlobalLocationNumber: (globalLocationNumber: string) => ({ globalLocationNumber: edmToTs(globalLocationNumber, 'Edm.String') }),
      AuthorityUser: (authorityUser: string) => ({ authorityUser: edmToTs(authorityUser, 'Edm.String') }),
      AuthorityPassword: (authorityPassword: string) => ({ authorityPassword: edmToTs(authorityPassword, 'Edm.String') }),
      URLforGoodsTransportService: (urLforGoodsTransportService: string) => ({ urLforGoodsTransportService: edmToTs(urLforGoodsTransportService, 'Edm.String') }),
      URLforInvoiceTypeService: (urLforInvoiceTypeService: string) => ({ urLforInvoiceTypeService: edmToTs(urLforInvoiceTypeService, 'Edm.String') })
    });
  }
}
