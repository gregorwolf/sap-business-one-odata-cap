/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReferencedObjectTypeEnum } from './ReferencedObjectTypeEnum';
import { LinkReferenceTypeEnum } from './LinkReferenceTypeEnum';
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
 * DocumentReference
 */
export interface DocumentReference<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Ref Doc Entr.
   * @nullable
   */
  refDocEntr?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Ref Doc Num.
   * @nullable
   */
  refDocNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Ext Doc Num.
   * @nullable
   */
  extDocNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ref Obj Type.
   * @nullable
   */
  refObjType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Access Key.
   * @nullable
   */
  accessKey?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Issue Date.
   * @nullable
   */
  issueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Issuer Cnpj.
   * @nullable
   */
  issuerCnpj?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Issuer Code.
   * @nullable
   */
  issuerCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Model.
   * @nullable
   */
  model?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Number.
   * @nullable
   */
  number?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Ref Acc Key.
   * @nullable
   */
  refAccKey?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ref Amount.
   * @nullable
   */
  refAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sub Series.
   * @nullable
   */
  subSeries?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Remark.
   * @nullable
   */
  remark?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Link Ref Typ.
   * @nullable
   */
  linkRefTyp?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * DocumentReferenceField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentReferenceField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocumentReference,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocumentReference.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentReference.lineNumber} property for query construction.
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
   * Representation of the {@link DocumentReference.refDocEntr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  refDocEntr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RefDocEntr', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentReference.refDocNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  refDocNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RefDocNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentReference.extDocNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  extDocNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExtDocNum', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentReference.refObjType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  refObjType: EnumField<
    EntityT,
    DeSerializersT,
    ReferencedObjectTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'RefObjType',
    ReferencedObjectTypeEnum,
    true
  );
  /**
   * Representation of the {@link DocumentReference.accessKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accessKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccessKey', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentReference.issueDate} property for query construction.
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
   * Representation of the {@link DocumentReference.issuerCnpj} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issuerCnpj: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('IssuerCNPJ', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentReference.issuerCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issuerCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('IssuerCode', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentReference.model} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  model: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Model', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentReference.series} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Series', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentReference.number} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Number', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentReference.refAccKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  refAccKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RefAccKey', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentReference.refAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  refAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RefAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentReference.subSeries} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subSeries: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubSeries', 'Edm.String', true);
  /**
   * Representation of the {@link DocumentReference.remark} property for query construction.
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
   * Representation of the {@link DocumentReference.linkRefTyp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkRefTyp: EnumField<
    EntityT,
    DeSerializersT,
    LinkReferenceTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'LinkRefTyp',
    LinkReferenceTypeEnum,
    true
  );

  /**
   * Creates an instance of DocumentReferenceField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DocumentReference, fieldOptions);
  }
}

export namespace DocumentReference {
  /**
   * Metadata information on all properties of the `DocumentReference` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentReference>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RefDocEntr',
      name: 'refDocEntr',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RefDocNum',
      name: 'refDocNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExtDocNum',
      name: 'extDocNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RefObjType',
      name: 'refObjType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AccessKey',
      name: 'accessKey',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IssueDate',
      name: 'issueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'IssuerCNPJ',
      name: 'issuerCnpj',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IssuerCode',
      name: 'issuerCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Model',
      name: 'model',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Series',
      name: 'series',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Number',
      name: 'number',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RefAccKey',
      name: 'refAccKey',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RefAmount',
      name: 'refAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SubSeries',
      name: 'subSeries',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Remark',
      name: 'remark',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LinkRefTyp',
      name: 'linkRefTyp',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
