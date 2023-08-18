/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscountGroupBaseObjectEnum } from './DiscountGroupBaseObjectEnum';
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
 * DiscountGroup
 */
export interface DiscountGroup<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Object Entry.
   * @nullable
   */
  objectEntry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Discount Percentage.
   * @nullable
   */
  discountPercentage?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Base Object Type.
   * @nullable
   */
  baseObjectType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * DiscountGroupField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DiscountGroupField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DiscountGroup,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DiscountGroup.objectEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ObjectEntry', 'Edm.String', true);
  /**
   * Representation of the {@link DiscountGroup.discountPercentage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountPercentage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DiscountPercentage',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DiscountGroup.bpCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true);
  /**
   * Representation of the {@link DiscountGroup.baseObjectType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseObjectType: EnumField<
    EntityT,
    DeSerializersT,
    DiscountGroupBaseObjectEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BaseObjectType',
    DiscountGroupBaseObjectEnum,
    true
  );

  /**
   * Creates an instance of DiscountGroupField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DiscountGroup, fieldOptions);
  }
}

export namespace DiscountGroup {
  /**
   * Metadata information on all properties of the `DiscountGroup` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DiscountGroup>[] = [
    {
      originalName: 'ObjectEntry',
      name: 'objectEntry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DiscountPercentage',
      name: 'discountPercentage',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BPCode',
      name: 'bpCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BaseObjectType',
      name: 'baseObjectType',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
