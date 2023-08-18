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
 * PmcTaskData
 */
export interface PmcTaskData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Task Id.
   * @nullable
   */
  taskId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Task Name.
   * @nullable
   */
  taskName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * PmcTaskDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcTaskDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PmcTaskData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PmcTaskData.taskId} property for query construction.
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
   * Representation of the {@link PmcTaskData.taskName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaskName', 'Edm.String', true);

  /**
   * Creates an instance of PmcTaskDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PmcTaskData, fieldOptions);
  }
}

export namespace PmcTaskData {
  /**
   * Metadata information on all properties of the `PmcTaskData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmcTaskData>[] = [
    {
      originalName: 'TaskID',
      name: 'taskId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TaskName',
      name: 'taskName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
