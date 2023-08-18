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
 * WorkflowTaskOutputObject
 */
export interface WorkflowTaskOutputObject<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Task Id.
   * @nullable
   */
  taskId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key.
   * @nullable
   */
  key?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sub Type.
   * @nullable
   */
  subType?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * WorkflowTaskOutputObjectField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkflowTaskOutputObjectField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WorkflowTaskOutputObject,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WorkflowTaskOutputObject.taskId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaskID', 'Edm.Int32', true);
  /**
   * Representation of the {@link WorkflowTaskOutputObject.lineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineId', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTaskOutputObject.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTaskOutputObject.key} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  key: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Key', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTaskOutputObject.subType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubType', 'Edm.String', true);

  /**
   * Creates an instance of WorkflowTaskOutputObjectField.
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
      WorkflowTaskOutputObject,
      fieldOptions
    );
  }
}

export namespace WorkflowTaskOutputObject {
  /**
   * Metadata information on all properties of the `WorkflowTaskOutputObject` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WorkflowTaskOutputObject>[] =
    [
      {
        originalName: 'TaskID',
        name: 'taskId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LineId',
        name: 'lineId',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Type',
        name: 'type',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Key',
        name: 'key',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'SubType',
        name: 'subType',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
