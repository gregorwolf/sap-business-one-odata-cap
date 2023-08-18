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
 * ContactEmployeeBlockSendingMarketingContent
 */
export interface ContactEmployeeBlockSendingMarketingContent<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Contact Employee Abs Entry.
   * @nullable
   */
  contactEmployeeAbsEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Communication Media Id.
   * @nullable
   */
  communicationMediaId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Choose.
   * @nullable
   */
  choose?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Contact Person Name.
   * @nullable
   */
  contactPersonName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ContactEmployeeBlockSendingMarketingContentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ContactEmployeeBlockSendingMarketingContentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ContactEmployeeBlockSendingMarketingContent,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ContactEmployeeBlockSendingMarketingContent.contactEmployeeAbsEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactEmployeeAbsEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ContactEmployeeAbsEntry',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ContactEmployeeBlockSendingMarketingContent.communicationMediaId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  communicationMediaId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CommunicationMediaId',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ContactEmployeeBlockSendingMarketingContent.choose} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  choose: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Choose', BoYesNoEnum, true);
  /**
   * Representation of the {@link ContactEmployeeBlockSendingMarketingContent.cardCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CardCode', 'Edm.String', true);
  /**
   * Representation of the {@link ContactEmployeeBlockSendingMarketingContent.contactPersonName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactPersonName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ContactPersonName',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of ContactEmployeeBlockSendingMarketingContentField.
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
      ContactEmployeeBlockSendingMarketingContent,
      fieldOptions
    );
  }
}

export namespace ContactEmployeeBlockSendingMarketingContent {
  /**
   * Metadata information on all properties of the `ContactEmployeeBlockSendingMarketingContent` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ContactEmployeeBlockSendingMarketingContent>[] =
    [
      {
        originalName: 'ContactEmployeeAbsEntry',
        name: 'contactEmployeeAbsEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'CommunicationMediaId',
        name: 'communicationMediaId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Choose',
        name: 'choose',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'CardCode',
        name: 'cardCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ContactPersonName',
        name: 'contactPersonName',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
