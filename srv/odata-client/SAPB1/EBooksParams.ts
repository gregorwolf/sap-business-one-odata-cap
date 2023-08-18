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
 * EBooksParams
 */
export interface EBooksParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Mark.
   * @nullable
   */
  mark?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Linked Doc Type.
   * @nullable
   */
  linkedDocType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Linked Doc Entry.
   * @nullable
   */
  linkedDocEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * EBooksParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EBooksParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EBooksParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EBooksParams.mark} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mark: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MARK', 'Edm.String', true);
  /**
   * Representation of the {@link EBooksParams.linkedDocType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkedDocType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LinkedDocType', 'Edm.Int32', true);
  /**
   * Representation of the {@link EBooksParams.linkedDocEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkedDocEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LinkedDocEntry', 'Edm.Int32', true);

  /**
   * Creates an instance of EBooksParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EBooksParams, fieldOptions);
  }
}

export namespace EBooksParams {
  /**
   * Metadata information on all properties of the `EBooksParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EBooksParams>[] = [
    {
      originalName: 'MARK',
      name: 'mark',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LinkedDocType',
      name: 'linkedDocType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LinkedDocEntry',
      name: 'linkedDocEntry',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
