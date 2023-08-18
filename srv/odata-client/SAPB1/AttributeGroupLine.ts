/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AttributeGroupFieldTypeEnum } from './AttributeGroupFieldTypeEnum';
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
 * AttributeGroupLine
 */
export interface AttributeGroupLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Sort Number.
   * @nullable
   */
  sortNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Attribute Id.
   * @nullable
   */
  attributeId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Attribute Name.
   * @nullable
   */
  attributeName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Field Type.
   * @nullable
   */
  fieldType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Default Value.
   * @nullable
   */
  defaultValue?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * AttributeGroupLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AttributeGroupLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AttributeGroupLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AttributeGroupLine.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', true);
  /**
   * Representation of the {@link AttributeGroupLine.sortNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SortNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link AttributeGroupLine.attributeId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attributeId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AttributeID', 'Edm.Int32', true);
  /**
   * Representation of the {@link AttributeGroupLine.attributeName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attributeName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AttributeName', 'Edm.String', true);
  /**
   * Representation of the {@link AttributeGroupLine.fieldType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldType: EnumField<
    EntityT,
    DeSerializersT,
    AttributeGroupFieldTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'FieldType',
    AttributeGroupFieldTypeEnum,
    true
  );
  /**
   * Representation of the {@link AttributeGroupLine.defaultValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DefaultValue', 'Edm.String', true);

  /**
   * Creates an instance of AttributeGroupLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, AttributeGroupLine, fieldOptions);
  }
}

export namespace AttributeGroupLine {
  /**
   * Metadata information on all properties of the `AttributeGroupLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AttributeGroupLine>[] = [
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SortNumber',
      name: 'sortNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AttributeID',
      name: 'attributeId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AttributeName',
      name: 'attributeName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FieldType',
      name: 'fieldType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DefaultValue',
      name: 'defaultValue',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
