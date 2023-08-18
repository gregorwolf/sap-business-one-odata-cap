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
 * EmployeeReviewsInfo
 */
export interface EmployeeReviewsInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Employee No.
   * @nullable
   */
  employeeNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Review Description.
   * @nullable
   */
  reviewDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Manager.
   * @nullable
   */
  manager?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Grade.
   * @nullable
   */
  grade?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * EmployeeReviewsInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeReviewsInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EmployeeReviewsInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EmployeeReviewsInfo.employeeNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EmployeeNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeeReviewsInfo.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeeReviewsInfo.date} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Date', 'Edm.DateTimeOffset', true);
  /**
   * Representation of the {@link EmployeeReviewsInfo.reviewDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reviewDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReviewDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EmployeeReviewsInfo.manager} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manager: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Manager', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeeReviewsInfo.grade} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grade: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Grade', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeeReviewsInfo.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);

  /**
   * Creates an instance of EmployeeReviewsInfoField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EmployeeReviewsInfo, fieldOptions);
  }
}

export namespace EmployeeReviewsInfo {
  /**
   * Metadata information on all properties of the `EmployeeReviewsInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeReviewsInfo>[] = [
    {
      originalName: 'EmployeeNo',
      name: 'employeeNo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Date',
      name: 'date',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ReviewDescription',
      name: 'reviewDescription',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Manager',
      name: 'manager',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Grade',
      name: 'grade',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
