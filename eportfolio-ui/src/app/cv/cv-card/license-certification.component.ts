import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { ApiService } from 'src/app/core/services/api.service';
import { userID } from 'src/global';
import { AlertService } from 'src/app/core/services/alert.service';
import { LicenseCertification } from 'src/app/core/models/license-certification.model';

@Component({
    selector: 'card-lc',
    templateUrl: './license-certification.component.html',
    styleUrls: ['../cv.component.css']
})

export class LicenseCertificationComponent {

    constructor(
        public modalService: ModalService,
        private apiService: ApiService,
        private alertService: AlertService
    ) { }

    @Input() classname: string
    @Input() title: string;
    @Input() data: LicenseCertification[];

    editForm(item: LicenseCertification) {
        this.modalService.openModal(this.classname, false, item)
    }

    addForm() {
        this.modalService.openModal(this.classname, true)
    }

    deleteForm(object_id: string) {
        this.apiService.delete(userID, this.classname, object_id)
          .subscribe(() => {
            this.alertService.success("Successfully deleted!");
          })
    }
}