/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { SortOrderEnum } from './SortOrderEnum';
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
 * ChooseFromListLine
 */
export interface ChooseFromListLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Object Name.
   * @nullable
   */
  objectName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Field Index.
   * @nullable
   */
  fieldIndex?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Field No.
   * @nullable
   */
  fieldNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Displayed Name.
   * @nullable
   */
  displayedName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Group By.
   * @nullable
   */
  groupBy?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Visible.
   * @nullable
   */
  visible?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Show Type.
   * @nullable
   */
  showType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Sort Order.
   * @nullable
   */
  sortOrder?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Visual Index.
   * @nullable
   */
  visualIndex?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ChooseFromListLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChooseFromListLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ChooseFromListLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ChooseFromListLine.objectName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ObjectName', 'Edm.String', true);
  /**
   * Representation of the {@link ChooseFromListLine.fieldIndex} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldIndex: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FieldIndex', 'Edm.Int32', true);
  /**
   * Representation of the {@link ChooseFromListLine.fieldNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FieldNo', 'Edm.String', true);
  /**
   * Representation of the {@link ChooseFromListLine.displayedName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayedName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DisplayedName', 'Edm.String', true);
  /**
   * Representation of the {@link ChooseFromListLine.groupBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupBy: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('GroupBy', BoYesNoEnum, true);
  /**
   * Representation of the {@link ChooseFromListLine.visible} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visible: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Visible', BoYesNoEnum, true);
  /**
   * Representation of the {@link ChooseFromListLine.showType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  showType: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ShowType', BoYesNoEnum, true);
  /**
   * Representation of the {@link ChooseFromListLine.sortOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortOrder: EnumField<EntityT, DeSerializersT, SortOrderEnum, true, false> =
    this._fieldBuilder.buildEnumField('SortOrder', SortOrderEnum, true);
  /**
   * Representation of the {@link ChooseFromListLine.visualIndex} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualIndex: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VisualIndex', 'Edm.Int32', true);

  /**
   * Creates an instance of ChooseFromListLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ChooseFromListLine, fieldOptions);
  }
}

export namespace ChooseFromListLine {
  /**
   * Metadata information on all properties of the `ChooseFromListLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ChooseFromListLine>[] = [
    {
      originalName: 'ObjectName',
      name: 'objectName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FieldIndex',
      name: 'fieldIndex',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FieldNo',
      name: 'fieldNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DisplayedName',
      name: 'displayedName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GroupBy',
      name: 'groupBy',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Visible',
      name: 'visible',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ShowType',
      name: 'showType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SortOrder',
      name: 'sortOrder',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'VisualIndex',
      name: 'visualIndex',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
