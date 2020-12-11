/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { LinkedDocTypeEnum } from './LinkedDocTypeEnum';
import { CampaignAssignToEnum } from './CampaignAssignToEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Response.
   * @nullable
   */
  response?: BoYesNoEnum;
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
   * Doc Type.
   * @nullable
   */
  docType?: LinkedDocTypeEnum;
  /**
   * Is Show Linked Doc.
   * @nullable
   */
  isShowLinkedDoc?: BoYesNoEnum;
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
   * Create Activity.
   * @nullable
   */
  createActivity?: BoYesNoEnum;
  /**
   * Assign To.
   * @nullable
   */
  assignTo?: CampaignAssignToEnum;
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
export class CampaignBusinessPartnerField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CampaignBusinessPartner> {
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
   * Representation of the [[CampaignBusinessPartner.response]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  response: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Response', this);
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
   * Representation of the [[CampaignBusinessPartner.docType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocType', this);
  /**
   * Representation of the [[CampaignBusinessPartner.isShowLinkedDoc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isShowLinkedDoc: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsShowLinkedDoc', this);
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
   * Representation of the [[CampaignBusinessPartner.createActivity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createActivity: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CreateActivity', this);
  /**
   * Representation of the [[CampaignBusinessPartner.assignTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assignTo: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AssignTo', this);
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

  /**
   * Creates an instance of CampaignBusinessPartnerField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CampaignBusinessPartner);
  }
}

export namespace CampaignBusinessPartner {
  /**
   * Metadata information on all properties of the `CampaignBusinessPartner` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CampaignBusinessPartner>[] = [{
    originalName: 'CampaignNumber',
    name: 'campaignNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CampaignLineNumber',
    name: 'campaignLineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPName',
    name: 'bpName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPGroupName',
    name: 'bpGroupName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPIndustryName',
    name: 'bpIndustryName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPStatus',
    name: 'bpStatus',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ContactCode',
    name: 'contactCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ContactTitle',
    name: 'contactTitle',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ContactPosition',
    name: 'contactPosition',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ContactEmail',
    name: 'contactEmail',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ContactTelephone',
    name: 'contactTelephone',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ContactMobile',
    name: 'contactMobile',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ContactFax',
    name: 'contactFax',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ContactAddress',
    name: 'contactAddress',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Response',
    name: 'response',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'RelatedSalesOpportunity',
    name: 'relatedSalesOpportunity',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Street',
    name: 'street',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Block',
    name: 'block',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'City',
    name: 'city',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ZipCode',
    name: 'zipCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'County',
    name: 'county',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'State',
    name: 'state',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Country',
    name: 'country',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Building',
    name: 'building',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocType',
    name: 'docType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'IsShowLinkedDoc',
    name: 'isShowLinkedDoc',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DocNumber',
    name: 'docNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FirstName',
    name: 'firstName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MiddleName',
    name: 'middleName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LastName',
    name: 'lastName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AddressID',
    name: 'addressId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AddressType',
    name: 'addressType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AddressName2',
    name: 'addressName2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AddressName3',
    name: 'addressName3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FederalTaxID',
    name: 'federalTaxId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StreetNo',
    name: 'streetNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CreateActivity',
    name: 'createActivity',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AssignTo',
    name: 'assignTo',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AssignName',
    name: 'assignName',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ResponseType',
    name: 'responseType',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CampaignBusinessPartner {
    return deserializeComplexTypeV4(json, CampaignBusinessPartner);
  }
}
