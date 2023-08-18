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
 * RouteStageParams
 */
export interface RouteStageParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Internal Number.
   * @nullable
   */
  internalNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Generation Time.
   * @nullable
   */
  generationTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Date Of Update.
   * @nullable
   */
  dateOfUpdate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * RouteStageParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RouteStageParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  RouteStageParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link RouteStageParams.internalNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InternalNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link RouteStageParams.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true);
  /**
   * Representation of the {@link RouteStageParams.description} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Description', 'Edm.String', true);
  /**
   * Representation of the {@link RouteStageParams.creationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreationDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link RouteStageParams.generationTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generationTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GenerationTime',
    'Edm.TimeOfDay',
    true
  );
  /**
   * Representation of the {@link RouteStageParams.dateOfUpdate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateOfUpdate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DateOfUpdate',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of RouteStageParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, RouteStageParams, fieldOptions);
  }
}

export namespace RouteStageParams {
  /**
   * Metadata information on all properties of the `RouteStageParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RouteStageParams>[] = [
    {
      originalName: 'InternalNumber',
      name: 'internalNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Description',
      name: 'description',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CreationDate',
      name: 'creationDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'GenerationTime',
      name: 'generationTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'DateOfUpdate',
      name: 'dateOfUpdate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    }
  ];
}
