/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RecipientTypeEnum } from './RecipientTypeEnum';
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
 * ActivityRecipient
 */
export interface ActivityRecipient<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
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
 * ActivityRecipientField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityRecipientField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ActivityRecipient,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ActivityRecipient.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ActivityRecipient.recipientType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  recipientType: EnumField<
    EntityT,
    DeSerializersT,
    RecipientTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'RecipientType',
    RecipientTypeEnum,
    true
  );
  /**
   * Representation of the {@link ActivityRecipient.recipientCode} property for query construction.
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
   * Creates an instance of ActivityRecipientField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ActivityRecipient, fieldOptions);
  }
}

export namespace ActivityRecipient {
  /**
   * Metadata information on all properties of the `ActivityRecipient` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ActivityRecipient>[] = [
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
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
