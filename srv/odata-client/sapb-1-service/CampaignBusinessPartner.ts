/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createCampaignBusinessPartner(json: any): CampaignBusinessPartner {
  return CampaignBusinessPartner.build(json);
}

/**
 * CampaignBusinessPartnerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CampaignBusinessPartnerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CampaignBusinessPartner.campaignNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CampaignNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignBusinessPartner.campaignLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CampaignLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignBusinessPartner.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.bpName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPName', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.bpGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpGroupName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPGroupName', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.bpIndustryName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpIndustryName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPIndustryName', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.bpStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpStatus: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPStatus', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.contactCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ContactCode', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.contactTitle]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactTitle: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ContactTitle', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.contactPosition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactPosition: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ContactPosition', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.contactEmail]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactEmail: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ContactEmail', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.contactTelephone]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactTelephone: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ContactTelephone', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.contactMobile]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactMobile: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ContactMobile', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.contactFax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactFax: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ContactFax', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.contactAddress]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactAddress: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ContactAddress', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.relatedSalesOpportunity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relatedSalesOpportunity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RelatedSalesOpportunity', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignBusinessPartner.street]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  street: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Street', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.block]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  block: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Block', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.city]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('City', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ZipCode', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.county]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  county: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('County', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.state]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('State', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.country]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Country', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.building]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  building: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Building', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.docNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignBusinessPartner.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignBusinessPartner.firstName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FirstName', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.middleName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  middleName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MiddleName', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.lastName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LastName', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.addressId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddressID', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.addressType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddressType', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.addressName2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressName2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddressName2', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.addressName3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressName3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddressName3', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FederalTaxID', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.streetNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  streetNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StreetNo', this, 'Edm.String');
  /**
   * Representation of the [[CampaignBusinessPartner.assignName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assignName: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AssignName', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignBusinessPartner.responseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  responseType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ResponseType', this, 'Edm.String');
}

export namespace CampaignBusinessPartner {
  export function build(json: { [keys: string]: FieldType }): CampaignBusinessPartner {
    return createComplexType(json, {
      CampaignNumber: (campaignNumber: number) => ({ campaignNumber: edmToTs(campaignNumber, 'Edm.Int32') }),
      CampaignLineNumber: (campaignLineNumber: number) => ({ campaignLineNumber: edmToTs(campaignLineNumber, 'Edm.Int32') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') }),
      BPName: (bpName: string) => ({ bpName: edmToTs(bpName, 'Edm.String') }),
      BPGroupName: (bpGroupName: string) => ({ bpGroupName: edmToTs(bpGroupName, 'Edm.String') }),
      BPIndustryName: (bpIndustryName: string) => ({ bpIndustryName: edmToTs(bpIndustryName, 'Edm.String') }),
      BPStatus: (bpStatus: string) => ({ bpStatus: edmToTs(bpStatus, 'Edm.String') }),
      ContactCode: (contactCode: string) => ({ contactCode: edmToTs(contactCode, 'Edm.String') }),
      ContactTitle: (contactTitle: string) => ({ contactTitle: edmToTs(contactTitle, 'Edm.String') }),
      ContactPosition: (contactPosition: string) => ({ contactPosition: edmToTs(contactPosition, 'Edm.String') }),
      ContactEmail: (contactEmail: string) => ({ contactEmail: edmToTs(contactEmail, 'Edm.String') }),
      ContactTelephone: (contactTelephone: string) => ({ contactTelephone: edmToTs(contactTelephone, 'Edm.String') }),
      ContactMobile: (contactMobile: string) => ({ contactMobile: edmToTs(contactMobile, 'Edm.String') }),
      ContactFax: (contactFax: string) => ({ contactFax: edmToTs(contactFax, 'Edm.String') }),
      ContactAddress: (contactAddress: string) => ({ contactAddress: edmToTs(contactAddress, 'Edm.String') }),
      RelatedSalesOpportunity: (relatedSalesOpportunity: number) => ({ relatedSalesOpportunity: edmToTs(relatedSalesOpportunity, 'Edm.Int32') }),
      Street: (street: string) => ({ street: edmToTs(street, 'Edm.String') }),
      Block: (block: string) => ({ block: edmToTs(block, 'Edm.String') }),
      City: (city: string) => ({ city: edmToTs(city, 'Edm.String') }),
      ZipCode: (zipCode: string) => ({ zipCode: edmToTs(zipCode, 'Edm.String') }),
      County: (county: string) => ({ county: edmToTs(county, 'Edm.String') }),
      State: (state: string) => ({ state: edmToTs(state, 'Edm.String') }),
      Country: (country: string) => ({ country: edmToTs(country, 'Edm.String') }),
      Building: (building: string) => ({ building: edmToTs(building, 'Edm.String') }),
      DocNumber: (docNumber: number) => ({ docNumber: edmToTs(docNumber, 'Edm.Int32') }),
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      FirstName: (firstName: string) => ({ firstName: edmToTs(firstName, 'Edm.String') }),
      MiddleName: (middleName: string) => ({ middleName: edmToTs(middleName, 'Edm.String') }),
      LastName: (lastName: string) => ({ lastName: edmToTs(lastName, 'Edm.String') }),
      AddressID: (addressId: string) => ({ addressId: edmToTs(addressId, 'Edm.String') }),
      AddressType: (addressType: string) => ({ addressType: edmToTs(addressType, 'Edm.String') }),
      AddressName2: (addressName2: string) => ({ addressName2: edmToTs(addressName2, 'Edm.String') }),
      AddressName3: (addressName3: string) => ({ addressName3: edmToTs(addressName3, 'Edm.String') }),
      FederalTaxID: (federalTaxId: string) => ({ federalTaxId: edmToTs(federalTaxId, 'Edm.String') }),
      StreetNo: (streetNo: string) => ({ streetNo: edmToTs(streetNo, 'Edm.String') }),
      AssignName: (assignName: number) => ({ assignName: edmToTs(assignName, 'Edm.Int32') }),
      ResponseType: (responseType: string) => ({ responseType: edmToTs(responseType, 'Edm.String') })
    });
  }
}
