/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryPostingCopyOptionEnum } from './InventoryPostingCopyOptionEnum';
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
 * InventoryPostingCopyOption
 */
export interface InventoryPostingCopyOption<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Copy Option.
   * @nullable
   */
  copyOption?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * InventoryPostingCopyOptionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryPostingCopyOptionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InventoryPostingCopyOption,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InventoryPostingCopyOption.baseEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryPostingCopyOption.copyOption} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  copyOption: EnumField<
    EntityT,
    DeSerializersT,
    InventoryPostingCopyOptionEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CopyOption',
    InventoryPostingCopyOptionEnum,
    true
  );

  /**
   * Creates an instance of InventoryPostingCopyOptionField.
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
      InventoryPostingCopyOption,
      fieldOptions
    );
  }
}

export namespace InventoryPostingCopyOption {
  /**
   * Metadata information on all properties of the `InventoryPostingCopyOption` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryPostingCopyOption>[] =
    [
      {
        originalName: 'BaseEntry',
        name: 'baseEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'CopyOption',
        name: 'copyOption',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
