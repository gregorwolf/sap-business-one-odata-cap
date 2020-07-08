import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CampaignBusinessPartner
 */
export interface CampaignBusinessPartner {
    /**
     * Campaign Number.
     * @nullable
     */
    campaignNumber?: number;
    /**
     * Campaign Line Number.
     * @nullable
     */
    campaignLineNumber?: number;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Bp Name.
     * @nullable
     */
    bpName?: string;
    /**
     * Bp Group Name.
     * @nullable
     */
    bpGroupName?: string;
    /**
     * Bp Industry Name.
     * @nullable
     */
    bpIndustryName?: string;
    /**
     * Bp Status.
     * @nullable
     */
    bpStatus?: string;
    /**
     * Contact Code.
     * @nullable
     */
    contactCode?: string;
    /**
     * Contact Title.
     * @nullable
     */
    contactTitle?: string;
    /**
     * Contact Position.
     * @nullable
     */
    contactPosition?: string;
    /**
     * Contact Email.
     * @nullable
     */
    contactEmail?: string;
    /**
     * Contact Telephone.
     * @nullable
     */
    contactTelephone?: string;
    /**
     * Contact Mobile.
     * @nullable
     */
    contactMobile?: string;
    /**
     * Contact Fax.
     * @nullable
     */
    contactFax?: string;
    /**
     * Contact Address.
     * @nullable
     */
    contactAddress?: string;
    /**
     * Related Sales Opportunity.
     * @nullable
     */
    relatedSalesOpportunity?: number;
    /**
     * Street.
     * @nullable
     */
    street?: string;
    /**
     * Block.
     * @nullable
     */
    block?: string;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * Zip Code.
     * @nullable
     */
    zipCode?: string;
    /**
     * County.
     * @nullable
     */
    county?: string;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Building.
     * @nullable
     */
    building?: string;
    /**
     * Doc Number.
     * @nullable
     */
    docNumber?: number;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * First Name.
     * @nullable
     */
    firstName?: string;
    /**
     * Middle Name.
     * @nullable
     */
    middleName?: string;
    /**
     * Last Name.
     * @nullable
     */
    lastName?: string;
    /**
     * Address Id.
     * @nullable
     */
    addressId?: string;
    /**
     * Address Type.
     * @nullable
     */
    addressType?: string;
    /**
     * Address Name 2.
     * @nullable
     */
    addressName2?: string;
    /**
     * Address Name 3.
     * @nullable
     */
    addressName3?: string;
    /**
     * Federal Tax Id.
     * @nullable
     */
    federalTaxId?: string;
    /**
     * Street No.
     * @nullable
     */
    streetNo?: string;
    /**
     * Assign Name.
     * @nullable
     */
    assignName?: number;
    /**
     * Response Type.
     * @nullable
     */
    responseType?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CampaignBusinessPartner.build]] instead.
 */
export declare function createCampaignBusinessPartner(json: any): CampaignBusinessPartner;
/**
 * CampaignBusinessPartnerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CampaignBusinessPartnerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CampaignBusinessPartner.campaignNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    campaignNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.campaignLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    campaignLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.bpName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.bpGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpGroupName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.bpIndustryName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpIndustryName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.bpStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpStatus: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.contactCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.contactTitle]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactTitle: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.contactPosition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactPosition: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactEmail: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.contactTelephone]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactTelephone: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.contactMobile]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactMobile: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.contactFax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactFax: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.contactAddress]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactAddress: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.relatedSalesOpportunity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    relatedSalesOpportunity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.street]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    street: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.block]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    block: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.city]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    city: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    zipCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.county]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    county: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.state]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    state: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.country]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    country: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.building]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    building: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.docNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.firstName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    firstName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.middleName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    middleName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.lastName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.addressId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.addressType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.addressName2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressName2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.addressName3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressName3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    federalTaxId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.streetNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    streetNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.assignName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    assignName: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignBusinessPartner.responseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    responseType: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CampaignBusinessPartner {
    function build(json: {
        [keys: string]: FieldType;
    }): CampaignBusinessPartner;
}
//# sourceMappingURL=CampaignBusinessPartner.d.ts.map