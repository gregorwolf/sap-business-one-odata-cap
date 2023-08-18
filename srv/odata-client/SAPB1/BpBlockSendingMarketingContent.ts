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
 * BpBlockSendingMarketingContent
 */
export interface BpBlockSendingMarketingContent<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
}

/**
 * BpBlockSendingMarketingContentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpBlockSendingMarketingContentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BpBlockSendingMarketingContent,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BpBlockSendingMarketingContent.cardCode} property for query construction.
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
   * Representation of the {@link BpBlockSendingMarketingContent.communicationMediaId} property for query construction.
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
   * Representation of the {@link BpBlockSendingMarketingContent.choose} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  choose: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Choose', BoYesNoEnum, true);

  /**
   * Creates an instance of BpBlockSendingMarketingContentField.
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
      BpBlockSendingMarketingContent,
      fieldOptions
    );
  }
}

export namespace BpBlockSendingMarketingContent {
  /**
   * Metadata information on all properties of the `BpBlockSendingMarketingContent` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpBlockSendingMarketingContent>[] =
    [
      {
        originalName: 'CardCode',
        name: 'cardCode',
        type: 'Edm.String',
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
      }
    ];
}
