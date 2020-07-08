import { ProjectManagementTimeSheetRequestBuilder } from './ProjectManagementTimeSheetRequestBuilder';
import { Moment } from 'moment';
import { PmTimeSheetLineData } from './PmTimeSheetLineData';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ProjectManagementTimeSheet" of service "SAPB1".
 */
export declare class ProjectManagementTimeSheet extends Entity implements ProjectManagementTimeSheetType {
    /**
     * Technical entity name for ProjectManagementTimeSheet.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ProjectManagementTimeSheet.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Doc Number.
     * @nullable
     */
    docNumber?: number;
    /**
     * User Id.
     * @nullable
     */
    userId?: number;
    /**
     * Last Name.
     * @nullable
     */
    lastName?: string;
    /**
     * First Name.
     * @nullable
     */
    firstName?: string;
    /**
     * Department.
     * @nullable
     */
    department?: number;
    /**
     * Date From.
     * @nullable
     */
    dateFrom?: Moment;
    /**
     * Date To.
     * @nullable
     */
    dateTo?: Moment;
    /**
     * Pm Time Sheet Line Data Collection.
     * @nullable
     */
    pmTimeSheetLineDataCollection?: PmTimeSheetLineData[];
    /**
     * One-to-one navigation property to the [[EmployeesInfo]] entity.
     */
    employeeInfo: EmployeesInfo;
    /**
     * Returns an entity builder to construct instances `ProjectManagementTimeSheet`.
     * @returns A builder that constructs instances of entity type `ProjectManagementTimeSheet`.
     */
    static builder(): EntityBuilderType<ProjectManagementTimeSheet, ProjectManagementTimeSheetTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ProjectManagementTimeSheet` entity type.
     * @returns A `ProjectManagementTimeSheet` request builder.
     */
    static requestBuilder(): ProjectManagementTimeSheetRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProjectManagementTimeSheet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ProjectManagementTimeSheet`.
     */
    static customField(fieldName: string): CustomField<ProjectManagementTimeSheet>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
export interface ProjectManagementTimeSheetType {
    absEntry?: number;
    docNumber?: number;
    userId?: number;
    lastName?: string;
    firstName?: string;
    department?: number;
    dateFrom?: Moment;
    dateTo?: Moment;
    pmTimeSheetLineDataCollection?: PmTimeSheetLineData[];
    employeeInfo: EmployeesInfoType;
}
export interface ProjectManagementTimeSheetTypeForceMandatory {
    absEntry: number;
    docNumber: number;
    userId: number;
    lastName: string;
    firstName: string;
    department: number;
    dateFrom: Moment;
    dateTo: Moment;
    pmTimeSheetLineDataCollection: PmTimeSheetLineData[];
    employeeInfo: EmployeesInfoType;
}
export declare namespace ProjectManagementTimeSheet {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<ProjectManagementTimeSheet>;
    /**
     * Static representation of the [[docNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUMBER: NumberField<ProjectManagementTimeSheet>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: NumberField<ProjectManagementTimeSheet>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<ProjectManagementTimeSheet>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<ProjectManagementTimeSheet>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: NumberField<ProjectManagementTimeSheet>;
    /**
     * Static representation of the [[dateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_FROM: DateField<ProjectManagementTimeSheet>;
    /**
     * Static representation of the [[dateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_TO: DateField<ProjectManagementTimeSheet>;
    /**
     * Static representation of the [[pmTimeSheetLineDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_TIME_SHEET_LINE_DATA_COLLECTION: CollectionField<ProjectManagementTimeSheet>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<ProjectManagementTimeSheet, EmployeesInfo>;
    /**
     * All fields of the ProjectManagementTimeSheet entity.
     */
    const _allFields: Array<NumberField<ProjectManagementTimeSheet> | StringField<ProjectManagementTimeSheet> | DateField<ProjectManagementTimeSheet> | CollectionField<ProjectManagementTimeSheet> | OneToOneLink<ProjectManagementTimeSheet, EmployeesInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ProjectManagementTimeSheet>;
    /**
     * All key fields of the ProjectManagementTimeSheet entity.
     */
    const _keyFields: Array<Field<ProjectManagementTimeSheet>>;
    /**
     * Mapping of all key field names to the respective static field property ProjectManagementTimeSheet.
     */
    const _keys: {
        [keys: string]: Field<ProjectManagementTimeSheet>;
    };
}
//# sourceMappingURL=ProjectManagementTimeSheet.d.ts.map