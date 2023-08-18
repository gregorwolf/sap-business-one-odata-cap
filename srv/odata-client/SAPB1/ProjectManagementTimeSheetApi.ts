/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectManagementTimeSheet } from './ProjectManagementTimeSheet';
import { ProjectManagementTimeSheetRequestBuilder } from './ProjectManagementTimeSheetRequestBuilder';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { Attachments2Api } from './Attachments2Api';
import { PmTimeSheetLineData } from './PmTimeSheetLineData';
import { TimeSheetTypeEnum } from './TimeSheetTypeEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProjectManagementTimeSheetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjectManagementTimeSheet<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ProjectManagementTimeSheetApi<DeSerializersT> {
    return new ProjectManagementTimeSheetApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      ProjectManagementTimeSheet<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      ProjectManagementTimeSheet<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EmployeesInfoApi<DeSerializersT>,
      Attachments2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EMPLOYEE_INFO: new OneToOneLink('EmployeeInfo', this, linkedApis[0]),
      ATTACHMENTS_2: new OneToOneLink('Attachments2', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProjectManagementTimeSheet;

  requestBuilder(): ProjectManagementTimeSheetRequestBuilder<DeSerializersT> {
    return new ProjectManagementTimeSheetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectManagementTimeSheet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectManagementTimeSheet<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectManagementTimeSheet<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ProjectManagementTimeSheet,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectManagementTimeSheet,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOC_NUMBER: OrderableEdmTypeField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TIME_SHEET_TYPE: EnumField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      TimeSheetTypeEnum,
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DATE_FROM: OrderableEdmTypeField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DATE_TO: OrderableEdmTypeField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SAP_PASSPORT: OrderableEdmTypeField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    USER_CODE: OrderableEdmTypeField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PM_TIME_SHEET_LINE_DATA_COLLECTION: CollectionField<
      ProjectManagementTimeSheet<DeSerializers>,
      DeSerializersT,
      PmTimeSheetLineData,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      ProjectManagementTimeSheet<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      ProjectManagementTimeSheet<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectManagementTimeSheet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link docNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link timeSheetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_TYPE: fieldBuilder.buildEnumField(
          'TimeSheetType',
          TimeSheetTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'Department',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link dateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_FROM: fieldBuilder.buildEdmTypeField(
          'DateFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link dateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TO: fieldBuilder.buildEdmTypeField(
          'DateTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link sapPassport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_PASSPORT: fieldBuilder.buildEdmTypeField(
          'SAPPassport',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link userCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_CODE: fieldBuilder.buildEdmTypeField(
          'UserCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pmTimeSheetLineDataCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PM_TIME_SHEET_LINE_DATA_COLLECTION: fieldBuilder.buildCollectionField(
          'PM_TimeSheetLineDataCollection',
          PmTimeSheetLineData,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectManagementTimeSheet)
      };
    }

    return this._schema;
  }
}
