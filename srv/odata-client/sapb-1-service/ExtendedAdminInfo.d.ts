import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare function createExtendedAdminInfo(json: any): ExtendedAdminInfo;
/**
 * ExtendedAdminInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExtendedAdminInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExtendedAdminInfo> {
    /**
     * Representation of the [[ExtendedAdminInfo.addressType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.streetNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    streetNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.stdCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stdCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.stdCodeForeign]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stdCodeForeign: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.natureOfCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    natureOfCompanyCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.economicActivityTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    economicActivityTypeCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.creditContributionOriginCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditContributionOriginCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.ipiPeriodCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ipiPeriodCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.cooperativeAssociationTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cooperativeAssociationTypeCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.profitTaxationCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    profitTaxationCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.companyQualificationCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    companyQualificationCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.declarerTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    declarerTypeCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.ipiTaxContributor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ipiTaxContributor: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.commercialRegister]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    commercialRegister: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.dateOfIncorporation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateOfIncorporation: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.spedProfile]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    spedProfile: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.environmentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    environmentType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.opting4Icms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    opting4Icms: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.okdpNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    okdpNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.globalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    globalLocationNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.enableIntrastat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enableIntrastat: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.authorityUser]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    authorityUser: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.authorityPassword]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    authorityPassword: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.urLforGoodsTransportService]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    urLforGoodsTransportService: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.urLforInvoiceTypeService]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    urLforInvoiceTypeService: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.electronicApprovalForGoodsTransEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    electronicApprovalForGoodsTransEnabled: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.electronicApprovalForInvoiceEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    electronicApprovalForInvoiceEnabled: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.allowInactiveItemsInInventoryOpeningBalance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allowInactiveItemsInInventoryOpeningBalance: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.allowInactiveItemsInInventoryCountingAndPosting]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allowInactiveItemsInInventoryCountingAndPosting: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedAdminInfo.autoAssignNewBranchToBp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    autoAssignNewBranchToBp: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ExtendedAdminInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ExtendedAdminInfo {
    /**
     * Metadata information on all properties of the `ExtendedAdminInfo` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ExtendedAdminInfo>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ExtendedAdminInfo;
}
//# sourceMappingURL=ExtendedAdminInfo.d.ts.map