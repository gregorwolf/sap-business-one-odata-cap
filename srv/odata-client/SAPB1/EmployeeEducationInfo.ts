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
 * EmployeeEducationInfo
 */
export interface EmployeeEducationInfo<
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
   * From Date.
   * @nullable
   */
  fromDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   * @nullable
   */
  toDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Education Type.
   * @nullable
   */
  educationType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Institute.
   * @nullable
   */
  institute?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Major.
   * @nullable
   */
  major?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Diploma.
   * @nullable
   */
  diploma?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * EmployeeEducationInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeEducationInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EmployeeEducationInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EmployeeEducationInfo.employeeNo} property for query construction.
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
   * Representation of the {@link EmployeeEducationInfo.lineNum} property for query construction.
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
   * Representation of the {@link EmployeeEducationInfo.fromDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FromDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EmployeeEducationInfo.toDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ToDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EmployeeEducationInfo.educationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  educationType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EducationType', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeeEducationInfo.institute} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  institute: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Institute', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeeEducationInfo.major} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  major: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Major', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeeEducationInfo.diploma} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  diploma: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Diploma', 'Edm.String', true);

  /**
   * Creates an instance of EmployeeEducationInfoField.
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
      EmployeeEducationInfo,
      fieldOptions
    );
  }
}

export namespace EmployeeEducationInfo {
  /**
   * Metadata information on all properties of the `EmployeeEducationInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeEducationInfo>[] = [
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
      originalName: 'FromDate',
      name: 'fromDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ToDate',
      name: 'toDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'EducationType',
      name: 'educationType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Institute',
      name: 'institute',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Major',
      name: 'major',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Diploma',
      name: 'diploma',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
