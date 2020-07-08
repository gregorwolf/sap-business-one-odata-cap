import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare function createExtendedAdminInfo(json: any): ExtendedAdminInfo;
/**
 * ExtendedAdminInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExtendedAdminInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace ExtendedAdminInfo {
    function build(json: {
        [keys: string]: FieldType;
    }): ExtendedAdminInfo;
}
//# sourceMappingURL=ExtendedAdminInfo.d.ts.map