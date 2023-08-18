/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlertManagementDocumentEnum } from './AlertManagementDocumentEnum';
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
 * AlertManagementDocument
 */
export interface AlertManagementDocument<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Document.
   * @nullable
   */
  document?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Active.
   * @nullable
   */
  active?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * AlertManagementDocumentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AlertManagementDocumentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AlertManagementDocument,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AlertManagementDocument.document} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  document: EnumField<
    EntityT,
    DeSerializersT,
    AlertManagementDocumentEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Document',
    AlertManagementDocumentEnum,
    true
  );
  /**
   * Representation of the {@link AlertManagementDocument.active} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  active: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Active', BoYesNoEnum, true);

  /**
   * Creates an instance of AlertManagementDocumentField.
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
      AlertManagementDocument,
      fieldOptions
    );
  }
}

export namespace AlertManagementDocument {
  /**
   * Metadata information on all properties of the `AlertManagementDocument` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AlertManagementDocument>[] =
    [
      {
        originalName: 'Document',
        name: 'document',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'Active',
        name: 'active',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
