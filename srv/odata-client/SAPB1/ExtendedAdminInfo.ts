/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { DocumentRemarksIncludeTypeEnum } from './DocumentRemarksIncludeTypeEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * ExtendedAdminInfo
 */
export interface ExtendedAdminInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Address Type.
   * @nullable
   */
  addressType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Street No.
   * @nullable
   */
  streetNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Std Code.
   * @nullable
   */
  stdCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Std Code Foreign.
   * @nullable
   */
  stdCodeForeign?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Nature Of Company Code.
   * @nullable
   */
  natureOfCompanyCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Economic Activity Type Code.
   * @nullable
   */
  economicActivityTypeCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Credit Contribution Origin Code.
   * @nullable
   */
  creditContributionOriginCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ipi Period Code.
   * @nullable
   */
  ipiPeriodCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cooperative Association Type Code.
   * @nullable
   */
  cooperativeAssociationTypeCode?: DeserializedType<
    DeSerializersT,
    'Edm.Int32'
  >;
  /**
   * Profit Taxation Code.
   * @nullable
   */
  profitTaxationCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Company Qualification Code.
   * @nullable
   */
  companyQualificationCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Declarer Type Code.
   * @nullable
   */
  declarerTypeCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Ipi Tax Contributor.
   * @nullable
   */
  ipiTaxContributor?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Commercial Register.
   * @nullable
   */
  commercialRegister?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Date Of Incorporation.
   * @nullable
   */
  dateOfIncorporation?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Sped Profile.
   * @nullable
   */
  spedProfile?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Environment Type.
   * @nullable
   */
  environmentType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Opting 4 Icms.
   * @nullable
   */
  opting4Icms?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Okdp Number.
   * @nullable
   */
  okdpNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Global Location Number.
   * @nullable
   */
  globalLocationNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Enable Intrastat.
   * @nullable
   */
  enableIntrastat?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Authority User.
   * @nullable
   */
  authorityUser?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Authority Password.
   * @nullable
   */
  authorityPassword?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ur Lfor Goods Transport Service.
   * @nullable
   */
  urLforGoodsTransportService?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ur Lfor Invoice Type Service.
   * @nullable
   */
  urLforInvoiceTypeService?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Electronic Approval For Goods Trans Enabled.
   * @nullable
   */
  electronicApprovalForGoodsTransEnabled?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Electronic Approval For Invoice Enabled.
   * @nullable
   */
  electronicApprovalForInvoiceEnabled?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Allow Inactive Items In Inventory Opening Balance.
   * @nullable
   */
  allowInactiveItemsInInventoryOpeningBalance?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Allow Inactive Items In Inventory Counting And Posting.
   * @nullable
   */
  allowInactiveItemsInInventoryCountingAndPosting?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Auto Assign New Branch To Bp.
   * @nullable
   */
  autoAssignNewBranchToBp?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Document Remarks Include.
   * @nullable
   */
  documentRemarksInclude?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Cnpj Of It.
   * @nullable
   */
  cnpjOfIt?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cn Person.
   * @nullable
   */
  cnPerson?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Email.
   * @nullable
   */
  email?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Telephone.
   * @nullable
   */
  telephone?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * No Warning For Link Type Udf.
   * @nullable
   */
  noWarningForLinkTypeUdf?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Enable Same Ur Lfor Payment Type Service.
   * @nullable
   */
  enableSameUrLforPaymentTypeService?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
  /**
   * Copy Ref Doc Form Orig Doc To Dup Doc.
   * @nullable
   */
  copyRefDocFormOrigDocToDupDoc?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * ExtendedAdminInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExtendedAdminInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ExtendedAdminInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.addressType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddressType', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedAdminInfo.streetNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  streetNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StreetNo', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedAdminInfo.stdCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stdCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('STDCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExtendedAdminInfo.stdCodeForeign} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stdCodeForeign: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('STDCodeForeign', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExtendedAdminInfo.natureOfCompanyCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  natureOfCompanyCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NatureOfCompanyCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.economicActivityTypeCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  economicActivityTypeCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EconomicActivityTypeCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.creditContributionOriginCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditContributionOriginCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreditContributionOriginCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.ipiPeriodCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ipiPeriodCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('IPIPeriodCode', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedAdminInfo.cooperativeAssociationTypeCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cooperativeAssociationTypeCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CooperativeAssociationTypeCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.profitTaxationCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitTaxationCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ProfitTaxationCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.companyQualificationCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  companyQualificationCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CompanyQualificationCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.declarerTypeCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  declarerTypeCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeclarerTypeCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.ipiTaxContributor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ipiTaxContributor: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('IPITaxContributor', BoYesNoEnum, true);
  /**
   * Representation of the {@link ExtendedAdminInfo.commercialRegister} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commercialRegister: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CommercialRegister',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.dateOfIncorporation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateOfIncorporation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DateOfIncorporation',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.spedProfile} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  spedProfile: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SPEDProfile', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedAdminInfo.environmentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  environmentType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EnvironmentType',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.opting4Icms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  opting4Icms: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Opting4ICMS', BoYesNoEnum, true);
  /**
   * Representation of the {@link ExtendedAdminInfo.okdpNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  okdpNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OKDPNumber', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedAdminInfo.globalLocationNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  globalLocationNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GlobalLocationNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.enableIntrastat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableIntrastat: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('EnableIntrastat', BoYesNoEnum, true);
  /**
   * Representation of the {@link ExtendedAdminInfo.authorityUser} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authorityUser: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AuthorityUser', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedAdminInfo.authorityPassword} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authorityPassword: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AuthorityPassword',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.urLforGoodsTransportService} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  urLforGoodsTransportService: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'URLforGoodsTransportService',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.urLforInvoiceTypeService} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  urLforInvoiceTypeService: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'URLforInvoiceTypeService',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.electronicApprovalForGoodsTransEnabled} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  electronicApprovalForGoodsTransEnabled: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ElectronicApprovalForGoodsTransEnabled',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.electronicApprovalForInvoiceEnabled} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  electronicApprovalForInvoiceEnabled: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ElectronicApprovalForInvoiceEnabled',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.allowInactiveItemsInInventoryOpeningBalance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowInactiveItemsInInventoryOpeningBalance: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AllowInactiveItemsInInventoryOpeningBalance',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.allowInactiveItemsInInventoryCountingAndPosting} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowInactiveItemsInInventoryCountingAndPosting: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AllowInactiveItemsInInventoryCountingAndPosting',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.autoAssignNewBranchToBp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autoAssignNewBranchToBp: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AutoAssignNewBranchToBP',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.documentRemarksInclude} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentRemarksInclude: EnumField<
    EntityT,
    DeSerializersT,
    DocumentRemarksIncludeTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DocumentRemarksInclude',
    DocumentRemarksIncludeTypeEnum,
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.cnpjOfIt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cnpjOfIt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CNPJOfIT', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedAdminInfo.cnPerson} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cnPerson: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CnPerson', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedAdminInfo.email} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  email: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedAdminInfo.telephone} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  telephone: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Telephone', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedAdminInfo.noWarningForLinkTypeUdf} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  noWarningForLinkTypeUdf: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'NoWarningForLinkTypeUDF',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.enableSameUrLforPaymentTypeService} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enableSameUrLforPaymentTypeService: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'EnableSameURLforPaymentTypeService',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ExtendedAdminInfo.copyRefDocFormOrigDocToDupDoc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  copyRefDocFormOrigDocToDupDoc: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CopyRefDocFormOrigDocToDupDoc',
    BoYesNoEnum,
    true
  );

  /**
   * Creates an instance of ExtendedAdminInfoField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ExtendedAdminInfo, fieldOptions);
  }
}

export namespace ExtendedAdminInfo {
  /**
   * Metadata information on all properties of the `ExtendedAdminInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExtendedAdminInfo>[] = [
    {
      originalName: 'AddressType',
      name: 'addressType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StreetNo',
      name: 'streetNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'STDCode',
      name: 'stdCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'STDCodeForeign',
      name: 'stdCodeForeign',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NatureOfCompanyCode',
      name: 'natureOfCompanyCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'EconomicActivityTypeCode',
      name: 'economicActivityTypeCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CreditContributionOriginCode',
      name: 'creditContributionOriginCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IPIPeriodCode',
      name: 'ipiPeriodCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CooperativeAssociationTypeCode',
      name: 'cooperativeAssociationTypeCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ProfitTaxationCode',
      name: 'profitTaxationCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CompanyQualificationCode',
      name: 'companyQualificationCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DeclarerTypeCode',
      name: 'declarerTypeCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'IPITaxContributor',
      name: 'ipiTaxContributor',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CommercialRegister',
      name: 'commercialRegister',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DateOfIncorporation',
      name: 'dateOfIncorporation',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'SPEDProfile',
      name: 'spedProfile',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EnvironmentType',
      name: 'environmentType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Opting4ICMS',
      name: 'opting4Icms',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'OKDPNumber',
      name: 'okdpNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GlobalLocationNumber',
      name: 'globalLocationNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EnableIntrastat',
      name: 'enableIntrastat',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AuthorityUser',
      name: 'authorityUser',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AuthorityPassword',
      name: 'authorityPassword',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'URLforGoodsTransportService',
      name: 'urLforGoodsTransportService',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'URLforInvoiceTypeService',
      name: 'urLforInvoiceTypeService',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ElectronicApprovalForGoodsTransEnabled',
      name: 'electronicApprovalForGoodsTransEnabled',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ElectronicApprovalForInvoiceEnabled',
      name: 'electronicApprovalForInvoiceEnabled',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AllowInactiveItemsInInventoryOpeningBalance',
      name: 'allowInactiveItemsInInventoryOpeningBalance',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AllowInactiveItemsInInventoryCountingAndPosting',
      name: 'allowInactiveItemsInInventoryCountingAndPosting',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AutoAssignNewBranchToBP',
      name: 'autoAssignNewBranchToBp',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DocumentRemarksInclude',
      name: 'documentRemarksInclude',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CNPJOfIT',
      name: 'cnpjOfIt',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CnPerson',
      name: 'cnPerson',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Email',
      name: 'email',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Telephone',
      name: 'telephone',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NoWarningForLinkTypeUDF',
      name: 'noWarningForLinkTypeUdf',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EnableSameURLforPaymentTypeService',
      name: 'enableSameUrLforPaymentTypeService',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CopyRefDocFormOrigDocToDupDoc',
      name: 'copyRefDocFormOrigDocToDupDoc',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
