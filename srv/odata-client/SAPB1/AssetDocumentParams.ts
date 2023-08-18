/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ClosingOptionEnum } from './ClosingOptionEnum';
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
 * AssetDocumentParams
 */
export interface AssetDocumentParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Cancellation Option.
   * @nullable
   */
  cancellationOption?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Cancellation Date.
   * @nullable
   */
  cancellationDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * AssetDocumentParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssetDocumentParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AssetDocumentParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AssetDocumentParams.docEntry} property for query construction.
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
   * Representation of the {@link AssetDocumentParams.cancellationOption} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cancellationOption: EnumField<
    EntityT,
    DeSerializersT,
    ClosingOptionEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CancellationOption',
    ClosingOptionEnum,
    true
  );
  /**
   * Representation of the {@link AssetDocumentParams.cancellationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cancellationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CancellationDate',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of AssetDocumentParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, AssetDocumentParams, fieldOptions);
  }
}

export namespace AssetDocumentParams {
  /**
   * Metadata information on all properties of the `AssetDocumentParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AssetDocumentParams>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CancellationOption',
      name: 'cancellationOption',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CancellationDate',
      name: 'cancellationDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    }
  ];
}
