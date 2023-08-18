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
 * UserKeysMdElement
 */
export interface UserKeysMdElement<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Sub Key Index.
   * @nullable
   */
  subKeyIndex?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Column Alias.
   * @nullable
   */
  columnAlias?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * UserKeysMdElementField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserKeysMdElementField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserKeysMdElement,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserKeysMdElement.subKeyIndex} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subKeyIndex: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubKeyIndex', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserKeysMdElement.columnAlias} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnAlias: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ColumnAlias', 'Edm.String', true);

  /**
   * Creates an instance of UserKeysMdElementField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, UserKeysMdElement, fieldOptions);
  }
}

export namespace UserKeysMdElement {
  /**
   * Metadata information on all properties of the `UserKeysMdElement` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserKeysMdElement>[] = [
    {
      originalName: 'SubKeyIndex',
      name: 'subKeyIndex',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ColumnAlias',
      name: 'columnAlias',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
