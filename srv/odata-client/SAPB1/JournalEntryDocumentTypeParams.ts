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
 * JournalEntryDocumentTypeParams
 */
export interface JournalEntryDocumentTypeParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Journal Entry Type.
   * @nullable
   */
  journalEntryType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Doc Type Description.
   * @nullable
   */
  docTypeDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Short Name.
   * @nullable
   */
  shortName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * JournalEntryDocumentTypeParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class JournalEntryDocumentTypeParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  JournalEntryDocumentTypeParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link JournalEntryDocumentTypeParams.journalEntryType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  journalEntryType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'JournalEntryType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link JournalEntryDocumentTypeParams.docTypeDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docTypeDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocTypeDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link JournalEntryDocumentTypeParams.shortName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shortName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShortName', 'Edm.String', true);

  /**
   * Creates an instance of JournalEntryDocumentTypeParamsField.
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
      JournalEntryDocumentTypeParams,
      fieldOptions
    );
  }
}

export namespace JournalEntryDocumentTypeParams {
  /**
   * Metadata information on all properties of the `JournalEntryDocumentTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<JournalEntryDocumentTypeParams>[] =
    [
      {
        originalName: 'JournalEntryType',
        name: 'journalEntryType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DocTypeDescription',
        name: 'docTypeDescription',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShortName',
        name: 'shortName',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
