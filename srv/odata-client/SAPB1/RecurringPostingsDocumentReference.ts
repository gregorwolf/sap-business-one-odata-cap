/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReferencedObjectTypeEnum } from './ReferencedObjectTypeEnum';
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
 * RecurringPostingsDocumentReference
 */
export interface RecurringPostingsDocumentReference<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Rcr Code.
   * @nullable
   */
  rcrCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Referenced Doc Entry.
   * @nullable
   */
  referencedDocEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Referenced Doc Number.
   * @nullable
   */
  referencedDocNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * External Referenced Doc Number.
   * @nullable
   */
  externalReferencedDocNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Referenced Object Type.
   * @nullable
   */
  referencedObjectType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Issue Date.
   * @nullable
   */
  issueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Remark.
   * @nullable
   */
  remark?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * RecurringPostingsDocumentReferenceField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RecurringPostingsDocumentReferenceField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  RecurringPostingsDocumentReference,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link RecurringPostingsDocumentReference.rcrCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rcrCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RcrCode', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsDocumentReference.lineNumber} property for query construction.
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
   * Representation of the {@link RecurringPostingsDocumentReference.referencedDocEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  referencedDocEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReferencedDocEntry',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link RecurringPostingsDocumentReference.referencedDocNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  referencedDocNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReferencedDocNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link RecurringPostingsDocumentReference.externalReferencedDocNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalReferencedDocNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalReferencedDocNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link RecurringPostingsDocumentReference.referencedObjectType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  referencedObjectType: EnumField<
    EntityT,
    DeSerializersT,
    ReferencedObjectTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ReferencedObjectType',
    ReferencedObjectTypeEnum,
    true
  );
  /**
   * Representation of the {@link RecurringPostingsDocumentReference.issueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'IssueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link RecurringPostingsDocumentReference.remark} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remark: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remark', 'Edm.String', true);

  /**
   * Creates an instance of RecurringPostingsDocumentReferenceField.
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
      RecurringPostingsDocumentReference,
      fieldOptions
    );
  }
}

export namespace RecurringPostingsDocumentReference {
  /**
   * Metadata information on all properties of the `RecurringPostingsDocumentReference` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RecurringPostingsDocumentReference>[] =
    [
      {
        originalName: 'RcrCode',
        name: 'rcrCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'LineNumber',
        name: 'lineNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ReferencedDocEntry',
        name: 'referencedDocEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ReferencedDocNumber',
        name: 'referencedDocNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ExternalReferencedDocNumber',
        name: 'externalReferencedDocNumber',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ReferencedObjectType',
        name: 'referencedObjectType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'IssueDate',
        name: 'issueDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'Remark',
        name: 'remark',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}