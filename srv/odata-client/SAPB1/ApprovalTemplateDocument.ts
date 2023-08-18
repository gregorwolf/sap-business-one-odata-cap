/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovalTemplatesDocumentTypeEnum } from './ApprovalTemplatesDocumentTypeEnum';
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
 * ApprovalTemplateDocument
 */
export interface ApprovalTemplateDocument<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Document Type.
   * @nullable
   */
  documentType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * ApprovalTemplateDocumentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalTemplateDocumentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ApprovalTemplateDocument,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ApprovalTemplateDocument.documentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: EnumField<
    EntityT,
    DeSerializersT,
    ApprovalTemplatesDocumentTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DocumentType',
    ApprovalTemplatesDocumentTypeEnum,
    true
  );

  /**
   * Creates an instance of ApprovalTemplateDocumentField.
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
      ApprovalTemplateDocument,
      fieldOptions
    );
  }
}

export namespace ApprovalTemplateDocument {
  /**
   * Metadata information on all properties of the `ApprovalTemplateDocument` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalTemplateDocument>[] =
    [
      {
        originalName: 'DocumentType',
        name: 'documentType',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}