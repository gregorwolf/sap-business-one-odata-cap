/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * PartnersSetupParams
 */
export interface PartnersSetupParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Partner Id.
   * @nullable
   */
  partnerId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Default Relationship.
   * @nullable
   */
  defaultRelationship?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Related Bp.
   * @nullable
   */
  relatedBp?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * PartnersSetupParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PartnersSetupParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PartnersSetupParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PartnersSetupParams.partnerId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  partnerId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PartnerID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PartnersSetupParams.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link PartnersSetupParams.defaultRelationship} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultRelationship: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultRelationship',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PartnersSetupParams.relatedBp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relatedBp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RelatedBP', 'Edm.String', true);
  /**
   * Representation of the {@link PartnersSetupParams.details} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true);

  /**
   * Creates an instance of PartnersSetupParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PartnersSetupParams, fieldOptions);
  }
}

export namespace PartnersSetupParams {
  /**
   * Metadata information on all properties of the `PartnersSetupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PartnersSetupParams>[] = [
    {
      originalName: 'PartnerID',
      name: 'partnerId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DefaultRelationship',
      name: 'defaultRelationship',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RelatedBP',
      name: 'relatedBp',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Details',
      name: 'details',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
