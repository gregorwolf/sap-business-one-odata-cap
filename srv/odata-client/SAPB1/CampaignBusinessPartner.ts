/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { LinkedDocTypeEnum } from './LinkedDocTypeEnum';
import { CampaignAssignToEnum } from './CampaignAssignToEnum';
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
 * CampaignBusinessPartner
 */
export interface CampaignBusinessPartner<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Campaign Number.
   * @nullable
   */
  campaignNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Campaign Line Number.
   * @nullable
   */
  campaignLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Name.
   * @nullable
   */
  bpName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Group Name.
   * @nullable
   */
  bpGroupName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Industry Name.
   * @nullable
   */
  bpIndustryName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Status.
   * @nullable
   */
  bpStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Contact Code.
   * @nullable
   */
  contactCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Contact Title.
   * @nullable
   */
  contactTitle?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Contact Position.
   * @nullable
   */
  contactPosition?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Contact Email.
   * @nullable
   */
  contactEmail?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Contact Telephone.
   * @nullable
   */
  contactTelephone?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Contact Mobile.
   * @nullable
   */
  contactMobile?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Contact Fax.
   * @nullable
   */
  contactFax?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Contact Address.
   * @nullable
   */
  contactAddress?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Response.
   * @nullable
   */
  response?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Related Sales Opportunity.
   * @nullable
   */
  relatedSalesOpportunity?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Block.
   * @nullable
   */
  block?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * County.
   * @nullable
   */
  county?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Building.
   * @nullable
   */
  building?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Is Show Linked Doc.
   * @nullable
   */
  isShowLinkedDoc?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Doc Number.
   * @nullable
   */
  docNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * First Name.
   * @nullable
   */
  firstName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Middle Name.
   * @nullable
   */
  middleName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Last Name.
   * @nullable
   */
  lastName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address Id.
   * @nullable
   */
  addressId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address Type.
   * @nullable
   */
  addressType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address Name 2.
   * @nullable
   */
  addressName2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address Name 3.
   * @nullable
   */
  addressName3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Street No.
   * @nullable
   */
  streetNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Create Activity.
   * @nullable
   */
  createActivity?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Assign To.
   * @nullable
   */
  assignTo?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Assign Name.
   * @nullable
   */
  assignName?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Response Type.
   * @nullable
   */
  responseType?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * CampaignBusinessPartnerField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CampaignBusinessPartnerField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CampaignBusinessPartner,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CampaignBusinessPartner.campaignNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CampaignNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.campaignLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CampaignLineNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link CampaignBusinessPartner.bpCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.bpName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPName', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.bpGroupName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpGroupName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPGroupName', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.bpIndustryName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpIndustryName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BPIndustryName',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link CampaignBusinessPartner.bpStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPStatus', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.contactCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ContactCode', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.contactTitle} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactTitle: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ContactTitle', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.contactPosition} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactPosition: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ContactPosition',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link CampaignBusinessPartner.contactEmail} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactEmail: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ContactEmail', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.contactTelephone} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactTelephone: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ContactTelephone',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link CampaignBusinessPartner.contactMobile} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactMobile: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ContactMobile', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.contactFax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactFax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ContactFax', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.contactAddress} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactAddress: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ContactAddress',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link CampaignBusinessPartner.response} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  response: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Response', BoYesNoEnum, true);
  /**
   * Representation of the {@link CampaignBusinessPartner.relatedSalesOpportunity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relatedSalesOpportunity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RelatedSalesOpportunity',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link CampaignBusinessPartner.street} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  street: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.block} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  block: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Block', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.city} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('City', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.zipCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.county} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  county: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('County', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.state} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('State', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.country} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.building} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  building: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Building', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.docType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: EnumField<EntityT, DeSerializersT, LinkedDocTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('DocType', LinkedDocTypeEnum, true);
  /**
   * Representation of the {@link CampaignBusinessPartner.isShowLinkedDoc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isShowLinkedDoc: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('IsShowLinkedDoc', BoYesNoEnum, true);
  /**
   * Representation of the {@link CampaignBusinessPartner.docNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.firstName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FirstName', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.middleName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  middleName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MiddleName', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.lastName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LastName', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.addressId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.addressType} property for query construction.
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
   * Representation of the {@link CampaignBusinessPartner.addressName2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressName2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddressName2', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.addressName3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressName3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddressName3', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.federalTaxId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FederalTaxID', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.streetNo} property for query construction.
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
   * Representation of the {@link CampaignBusinessPartner.createActivity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createActivity: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('CreateActivity', BoYesNoEnum, true);
  /**
   * Representation of the {@link CampaignBusinessPartner.assignTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assignTo: EnumField<
    EntityT,
    DeSerializersT,
    CampaignAssignToEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('AssignTo', CampaignAssignToEnum, true);
  /**
   * Representation of the {@link CampaignBusinessPartner.assignName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assignName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AssignName', 'Edm.Int32', true);
  /**
   * Representation of the {@link CampaignBusinessPartner.responseType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  responseType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ResponseType', 'Edm.String', true);

  /**
   * Creates an instance of CampaignBusinessPartnerField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      CampaignBusinessPartner,
      fieldOptions
    );
  }
}

export namespace CampaignBusinessPartner {
  /**
   * Metadata information on all properties of the `CampaignBusinessPartner` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CampaignBusinessPartner>[] =
    [
      {
        originalName: 'CampaignNumber',
        name: 'campaignNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'CampaignLineNumber',
        name: 'campaignLineNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'BPCode',
        name: 'bpCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BPName',
        name: 'bpName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BPGroupName',
        name: 'bpGroupName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BPIndustryName',
        name: 'bpIndustryName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BPStatus',
        name: 'bpStatus',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ContactCode',
        name: 'contactCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ContactTitle',
        name: 'contactTitle',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ContactPosition',
        name: 'contactPosition',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ContactEmail',
        name: 'contactEmail',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ContactTelephone',
        name: 'contactTelephone',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ContactMobile',
        name: 'contactMobile',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ContactFax',
        name: 'contactFax',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ContactAddress',
        name: 'contactAddress',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Response',
        name: 'response',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'RelatedSalesOpportunity',
        name: 'relatedSalesOpportunity',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Street',
        name: 'street',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Block',
        name: 'block',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'City',
        name: 'city',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ZipCode',
        name: 'zipCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'County',
        name: 'county',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'State',
        name: 'state',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Country',
        name: 'country',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Building',
        name: 'building',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DocType',
        name: 'docType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'IsShowLinkedDoc',
        name: 'isShowLinkedDoc',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'DocNumber',
        name: 'docNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'FirstName',
        name: 'firstName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'MiddleName',
        name: 'middleName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'LastName',
        name: 'lastName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'AddressID',
        name: 'addressId',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'AddressType',
        name: 'addressType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'AddressName2',
        name: 'addressName2',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'AddressName3',
        name: 'addressName3',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'FederalTaxID',
        name: 'federalTaxId',
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
        originalName: 'CreateActivity',
        name: 'createActivity',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'AssignTo',
        name: 'assignTo',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'AssignName',
        name: 'assignName',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ResponseType',
        name: 'responseType',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
