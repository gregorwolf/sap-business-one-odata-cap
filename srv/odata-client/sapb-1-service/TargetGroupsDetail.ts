/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TargetGroupsDetailStatusEnum } from './TargetGroupsDetailStatusEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TargetGroupsDetail
 */
export interface TargetGroupsDetail {
  /**
   * Target Group Code.
   * @nullable
   */
  targetGroupCode?: string;
  /**
   * Business Partner Code.
   * @nullable
   */
  businessPartnerCode?: string;
  /**
   * Business Partner Name.
   * @nullable
   */
  businessPartnerName?: string;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: string;
  /**
   * Industry.
   * @nullable
   */
  industry?: string;
  /**
   * Active Status.
   * @nullable
   */
  activeStatus?: TargetGroupsDetailStatusEnum;
  /**
   * Contact Person.
   * @nullable
   */
  contactPerson?: string;
  /**
   * Title.
   * @nullable
   */
  title?: string;
  /**
   * Position.
   * @nullable
   */
  position?: string;
  /**
   * E Mail.
   * @nullable
   */
  eMail?: string;
  /**
   * Telephone.
   * @nullable
   */
  telephone?: string;
  /**
   * Mobile Phone.
   * @nullable
   */
  mobilePhone?: string;
  /**
   * Fax.
   * @nullable
   */
  fax?: string;
  /**
   * Address.
   * @nullable
   */
  address?: string;
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
}

/**
 * @deprecated Since v1.6.0. Use [[TargetGroupsDetail.build]] instead.
 */
export function createTargetGroupsDetail(json: any): TargetGroupsDetail {
  return TargetGroupsDetail.build(json);
}

/**
 * TargetGroupsDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TargetGroupsDetailField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TargetGroupsDetail> {
  /**
   * Representation of the [[TargetGroupsDetail.targetGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetGroupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TargetGroupCode', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.businessPartnerCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPartnerCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BusinessPartnerCode', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.businessPartnerName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPartnerName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BusinessPartnerName', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.groupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GroupCode', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.industry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  industry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Industry', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.activeStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ActiveStatus', this);
  /**
   * Representation of the [[TargetGroupsDetail.contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactPerson: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ContactPerson', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.title]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  title: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Title', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.position]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  position: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Position', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.eMail]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eMail: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('E_Mail', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.telephone]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  telephone: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Telephone', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.mobilePhone]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mobilePhone: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MobilePhone', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.fax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fax: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Fax', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.address]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Address', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.street]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  street: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Street', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.block]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  block: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Block', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.city]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('City', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ZipCode', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.county]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  county: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('County', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.state]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('State', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.country]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Country', this, 'Edm.String');
  /**
   * Representation of the [[TargetGroupsDetail.building]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  building: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Building', this, 'Edm.String');

  /**
   * Creates an instance of TargetGroupsDetailField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TargetGroupsDetail);
  }
}

export namespace TargetGroupsDetail {
  /**
   * Metadata information on all properties of the `TargetGroupsDetail` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TargetGroupsDetail>[] = [{
    originalName: 'TargetGroupCode',
    name: 'targetGroupCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BusinessPartnerCode',
    name: 'businessPartnerCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BusinessPartnerName',
    name: 'businessPartnerName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GroupCode',
    name: 'groupCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Industry',
    name: 'industry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ActiveStatus',
    name: 'activeStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ContactPerson',
    name: 'contactPerson',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Title',
    name: 'title',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Position',
    name: 'position',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'E_Mail',
    name: 'eMail',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Telephone',
    name: 'telephone',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MobilePhone',
    name: 'mobilePhone',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Fax',
    name: 'fax',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Address',
    name: 'address',
    type: 'Edm.String',
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
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TargetGroupsDetail {
    return deserializeComplexTypeV4(json, TargetGroupsDetail);
  }
}
