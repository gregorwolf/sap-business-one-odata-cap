/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActivityRecipientObjTypeEnum } from './ActivityRecipientObjTypeEnum';
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
 * ActivityMultipleRecipient
 */
export interface ActivityMultipleRecipient<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Numer.
   * @nullable
   */
  lineNumer?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Recipient Type.
   * @nullable
   */
  recipientType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Recipient Code.
   * @nullable
   */
  recipientCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ActivityMultipleRecipientField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityMultipleRecipientField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ActivityMultipleRecipient,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ActivityMultipleRecipient.lineNumer} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumer: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumer', 'Edm.Int32', true);
  /**
   * Representation of the {@link ActivityMultipleRecipient.recipientType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  recipientType: EnumField<
    EntityT,
    DeSerializersT,
    ActivityRecipientObjTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'RecipientType',
    ActivityRecipientObjTypeEnum,
    true
  );
  /**
   * Representation of the {@link ActivityMultipleRecipient.recipientCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  recipientCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RecipientCode', 'Edm.String', true);

  /**
   * Creates an instance of ActivityMultipleRecipientField.
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
      ActivityMultipleRecipient,
      fieldOptions
    );
  }
}

export namespace ActivityMultipleRecipient {
  /**
   * Metadata information on all properties of the `ActivityMultipleRecipient` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ActivityMultipleRecipient>[] =
    [
      {
        originalName: 'LineNumer',
        name: 'lineNumer',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'RecipientType',
        name: 'recipientType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'RecipientCode',
        name: 'recipientCode',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
