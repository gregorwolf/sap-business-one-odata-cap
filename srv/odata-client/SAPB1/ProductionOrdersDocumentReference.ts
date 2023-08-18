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
 * ProductionOrdersDocumentReference
 */
export interface ProductionOrdersDocumentReference<
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
 * ProductionOrdersDocumentReferenceField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductionOrdersDocumentReferenceField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ProductionOrdersDocumentReference,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ProductionOrdersDocumentReference.docEntry} property for query construction.
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
   * Representation of the {@link ProductionOrdersDocumentReference.lineNumber} property for query construction.
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
   * Representation of the {@link ProductionOrdersDocumentReference.refDocEntr} property for query construction.
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
   * Representation of the {@link ProductionOrdersDocumentReference.refDocNum} property for query construction.
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
   * Representation of the {@link ProductionOrdersDocumentReference.extDocNum} property for query construction.
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
   * Representation of the {@link ProductionOrdersDocumentReference.refObjType} property for query construction.
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
   * Representation of the {@link ProductionOrdersDocumentReference.issueDate} property for query construction.
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
   * Representation of the {@link ProductionOrdersDocumentReference.remark} property for query construction.
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
   * Creates an instance of ProductionOrdersDocumentReferenceField.
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
      ProductionOrdersDocumentReference,
      fieldOptions
    );
  }
}

export namespace ProductionOrdersDocumentReference {
  /**
   * Metadata information on all properties of the `ProductionOrdersDocumentReference` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProductionOrdersDocumentReference>[] =
    [
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
