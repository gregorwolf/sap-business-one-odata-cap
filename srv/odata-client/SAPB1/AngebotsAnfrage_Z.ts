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
 * AngebotsAnfrage_Z
 */
export interface AngebotsAnfrage_Z<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Vis Order.
   * @nullable
   */
  visOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Object.
   * @nullable
   */
  object?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Log Inst.
   * @nullable
   */
  logInst?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Lvpostext.
   * @nullable
   */
  uLvpostext?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Itemcode.
   * @nullable
   */
  uItemcode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * AngebotsAnfrage_ZField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AngebotsAnfrage_ZField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AngebotsAnfrage_Z,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AngebotsAnfrage_Z.docEntry} property for query construction.
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
   * Representation of the {@link AngebotsAnfrage_Z.lineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineId', 'Edm.Int32', true);
  /**
   * Representation of the {@link AngebotsAnfrage_Z.visOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visOrder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VisOrder', 'Edm.Int32', true);
  /**
   * Representation of the {@link AngebotsAnfrage_Z.object} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  object: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Object', 'Edm.String', true);
  /**
   * Representation of the {@link AngebotsAnfrage_Z.logInst} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logInst: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogInst', 'Edm.Int32', true);
  /**
   * Representation of the {@link AngebotsAnfrage_Z.uLvpostext} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uLvpostext: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_LVPOSTEXT', 'Edm.String', true);
  /**
   * Representation of the {@link AngebotsAnfrage_Z.uItemcode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uItemcode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_ITEMCODE', 'Edm.String', true);

  /**
   * Creates an instance of AngebotsAnfrage_ZField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, AngebotsAnfrage_Z, fieldOptions);
  }
}

export namespace AngebotsAnfrage_Z {
  /**
   * Metadata information on all properties of the `AngebotsAnfrage_Z` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AngebotsAnfrage_Z>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineId',
      name: 'lineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VisOrder',
      name: 'visOrder',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Object',
      name: 'object',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LogInst',
      name: 'logInst',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'U_LVPOSTEXT',
      name: 'uLvpostext',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_ITEMCODE',
      name: 'uItemcode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
