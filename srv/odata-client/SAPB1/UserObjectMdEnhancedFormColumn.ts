/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * UserObjectMdEnhancedFormColumn
 */
export interface UserObjectMdEnhancedFormColumn<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Column Number.
   * @nullable
   */
  columnNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Child Number.
   * @nullable
   */
  childNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Column Alias.
   * @nullable
   */
  columnAlias?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Column Description.
   * @nullable
   */
  columnDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Column Is Used.
   * @nullable
   */
  columnIsUsed?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Editable.
   * @nullable
   */
  editable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * UserObjectMdEnhancedFormColumnField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserObjectMdEnhancedFormColumnField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserObjectMdEnhancedFormColumn,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserObjectMdEnhancedFormColumn.code} property for query construction.
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
   * Representation of the {@link UserObjectMdEnhancedFormColumn.columnNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ColumnNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserObjectMdEnhancedFormColumn.childNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  childNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ChildNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserObjectMdEnhancedFormColumn.columnAlias} property for query construction.
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
   * Representation of the {@link UserObjectMdEnhancedFormColumn.columnDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ColumnDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link UserObjectMdEnhancedFormColumn.columnIsUsed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnIsUsed: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ColumnIsUsed', BoYesNoEnum, true);
  /**
   * Representation of the {@link UserObjectMdEnhancedFormColumn.editable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  editable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Editable', BoYesNoEnum, true);

  /**
   * Creates an instance of UserObjectMdEnhancedFormColumnField.
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
      UserObjectMdEnhancedFormColumn,
      fieldOptions
    );
  }
}

export namespace UserObjectMdEnhancedFormColumn {
  /**
   * Metadata information on all properties of the `UserObjectMdEnhancedFormColumn` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserObjectMdEnhancedFormColumn>[] =
    [
      {
        originalName: 'Code',
        name: 'code',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ColumnNumber',
        name: 'columnNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ChildNumber',
        name: 'childNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ColumnAlias',
        name: 'columnAlias',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ColumnDescription',
        name: 'columnDescription',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ColumnIsUsed',
        name: 'columnIsUsed',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'Editable',
        name: 'editable',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
