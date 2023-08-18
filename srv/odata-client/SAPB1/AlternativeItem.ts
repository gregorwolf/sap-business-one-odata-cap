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
 * AlternativeItem
 */
export interface AlternativeItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Alternative Item Code.
   * @nullable
   */
  alternativeItemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Match Factor.
   * @nullable
   */
  matchFactor?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * AlternativeItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AlternativeItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AlternativeItem,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AlternativeItem.alternativeItemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alternativeItemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AlternativeItemCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AlternativeItem.matchFactor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  matchFactor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MatchFactor', 'Edm.Double', true);
  /**
   * Representation of the {@link AlternativeItem.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);

  /**
   * Creates an instance of AlternativeItemField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, AlternativeItem, fieldOptions);
  }
}

export namespace AlternativeItem {
  /**
   * Metadata information on all properties of the `AlternativeItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AlternativeItem>[] = [
    {
      originalName: 'AlternativeItemCode',
      name: 'alternativeItemCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'MatchFactor',
      name: 'matchFactor',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
