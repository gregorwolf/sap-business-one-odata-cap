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
 * AlertManagementRecipient
 */
export interface AlertManagementRecipient<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * User Code.
   * @nullable
   */
  userCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Send E Mail.
   * @nullable
   */
  sendEMail?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Send Sms.
   * @nullable
   */
  sendSms?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Send Fax.
   * @nullable
   */
  sendFax?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Send Internal.
   * @nullable
   */
  sendInternal?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * AlertManagementRecipientField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AlertManagementRecipientField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AlertManagementRecipient,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AlertManagementRecipient.userCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link AlertManagementRecipient.sendEMail} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendEMail: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SendEMail', BoYesNoEnum, true);
  /**
   * Representation of the {@link AlertManagementRecipient.sendSms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendSms: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SendSMS', BoYesNoEnum, true);
  /**
   * Representation of the {@link AlertManagementRecipient.sendFax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendFax: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SendFax', BoYesNoEnum, true);
  /**
   * Representation of the {@link AlertManagementRecipient.sendInternal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendInternal: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SendInternal', BoYesNoEnum, true);

  /**
   * Creates an instance of AlertManagementRecipientField.
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
      AlertManagementRecipient,
      fieldOptions
    );
  }
}

export namespace AlertManagementRecipient {
  /**
   * Metadata information on all properties of the `AlertManagementRecipient` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AlertManagementRecipient>[] =
    [
      {
        originalName: 'UserCode',
        name: 'userCode',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'SendEMail',
        name: 'sendEMail',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'SendSMS',
        name: 'sendSms',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'SendFax',
        name: 'sendFax',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'SendInternal',
        name: 'sendInternal',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
