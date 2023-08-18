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
 * ActivityInstanceParams
 */
export interface ActivityInstanceParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Activity Code.
   * @nullable
   */
  activityCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Instance Date.
   * @nullable
   */
  instanceDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * ActivityInstanceParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityInstanceParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ActivityInstanceParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ActivityInstanceParams.activityCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActivityCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ActivityInstanceParams.instanceDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instanceDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InstanceDate',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of ActivityInstanceParamsField.
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
      ActivityInstanceParams,
      fieldOptions
    );
  }
}

export namespace ActivityInstanceParams {
  /**
   * Metadata information on all properties of the `ActivityInstanceParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ActivityInstanceParams>[] = [
    {
      originalName: 'ActivityCode',
      name: 'activityCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'InstanceDate',
      name: 'instanceDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    }
  ];
}
