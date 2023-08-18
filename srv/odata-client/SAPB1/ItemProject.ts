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
 * ItemProject
 */
export interface ItemProject<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ItemProjectField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemProjectField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ItemProject,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ItemProject.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemProject.validFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  validFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ValidFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ItemProject.validTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  validTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ValidTo',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ItemProject.project} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true);

  /**
   * Creates an instance of ItemProjectField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ItemProject, fieldOptions);
  }
}

export namespace ItemProject {
  /**
   * Metadata information on all properties of the `ItemProject` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemProject>[] = [
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ValidFrom',
      name: 'validFrom',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ValidTo',
      name: 'validTo',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Project',
      name: 'project',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
