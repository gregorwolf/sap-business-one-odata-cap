/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TargetGroupsDetailStatusEnum } from './TargetGroupsDetailStatusEnum';
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
 * TargetGroupsDetail
 */
export interface TargetGroupsDetail<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Target Group Code.
   * @nullable
   */
  targetGroupCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Business Partner Code.
   * @nullable
   */
  businessPartnerCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Business Partner Name.
   * @nullable
   */
  businessPartnerName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Industry.
   * @nullable
   */
  industry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Active Status.
   * @nullable
   */
  activeStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Contact Person.
   * @nullable
   */
  contactPerson?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Title.
   * @nullable
   */
  title?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Position.
   * @nullable
   */
  position?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Mail.
   * @nullable
   */
  eMail?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Telephone.
   * @nullable
   */
  telephone?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Mobile Phone.
   * @nullable
   */
  mobilePhone?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fax.
   * @nullable
   */
  fax?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
}

/**
 * TargetGroupsDetailField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TargetGroupsDetailField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TargetGroupsDetail,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TargetGroupsDetail.targetGroupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetGroupCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TargetGroupCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link TargetGroupsDetail.businessPartnerCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPartnerCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BusinessPartnerCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link TargetGroupsDetail.businessPartnerName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPartnerName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BusinessPartnerName',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link TargetGroupsDetail.groupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GroupCode', 'Edm.String', true);
  /**
   * Representation of the {@link TargetGroupsDetail.industry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  industry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true);
  /**
   * Representation of the {@link TargetGroupsDetail.activeStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeStatus: EnumField<
    EntityT,
    DeSerializersT,
    TargetGroupsDetailStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ActiveStatus',
    TargetGroupsDetailStatusEnum,
    true
  );
  /**
   * Representation of the {@link TargetGroupsDetail.contactPerson} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactPerson: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ContactPerson', 'Edm.String', true);
  /**
   * Representation of the {@link TargetGroupsDetail.title} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  title: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true);
  /**
   * Representation of the {@link TargetGroupsDetail.position} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  position: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Position', 'Edm.String', true);
  /**
   * Representation of the {@link TargetGroupsDetail.eMail} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eMail: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('E_Mail', 'Edm.String', true);
  /**
   * Representation of the {@link TargetGroupsDetail.telephone} property for query construction.
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
   * Representation of the {@link TargetGroupsDetail.mobilePhone} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mobilePhone: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MobilePhone', 'Edm.String', true);
  /**
   * Representation of the {@link TargetGroupsDetail.fax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true);
  /**
   * Representation of the {@link TargetGroupsDetail.address} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true);
  /**
   * Representation of the {@link TargetGroupsDetail.street} property for query construction.
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
   * Representation of the {@link TargetGroupsDetail.block} property for query construction.
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
   * Representation of the {@link TargetGroupsDetail.city} property for query construction.
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
   * Representation of the {@link TargetGroupsDetail.zipCode} property for query construction.
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
   * Representation of the {@link TargetGroupsDetail.county} property for query construction.
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
   * Representation of the {@link TargetGroupsDetail.state} property for query construction.
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
   * Representation of the {@link TargetGroupsDetail.country} property for query construction.
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
   * Representation of the {@link TargetGroupsDetail.building} property for query construction.
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
   * Creates an instance of TargetGroupsDetailField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, TargetGroupsDetail, fieldOptions);
  }
}

export namespace TargetGroupsDetail {
  /**
   * Metadata information on all properties of the `TargetGroupsDetail` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TargetGroupsDetail>[] = [
    {
      originalName: 'TargetGroupCode',
      name: 'targetGroupCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BusinessPartnerCode',
      name: 'businessPartnerCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BusinessPartnerName',
      name: 'businessPartnerName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GroupCode',
      name: 'groupCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Industry',
      name: 'industry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ActiveStatus',
      name: 'activeStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ContactPerson',
      name: 'contactPerson',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Title',
      name: 'title',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Position',
      name: 'position',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'E_Mail',
      name: 'eMail',
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
      originalName: 'MobilePhone',
      name: 'mobilePhone',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Fax',
      name: 'fax',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Address',
      name: 'address',
      type: 'Edm.String',
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
    }
  ];
}
